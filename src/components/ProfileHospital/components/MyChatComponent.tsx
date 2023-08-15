import { useState } from "react";
import {
  ChatActions,
  ChatNavCard,
  DetailedChatCard,
  FilterButton,
  FilterButtonsWrapper,
  HospitalImage,
  HospitalInfo,
  HospitalLine,
  HospitalList,
  HospitalListItem,
  HospitalSearchInput,
  HospitalSubtitle,
  HospitalTime,
  HospitalTitle,
} from "../../Profile/styles/styled.Chat";
import useChats from "@/hooks/useChats";
import { useRouter } from "next/router";
import { Chat, Id } from "@/types";
import { SearchOutlined } from "@ant-design/icons";
import useUser from "@/hooks/useUser";
import { Timestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ChatCard from "@/components/ChatCard";
import { Col, Row } from "antd";
import { Sticky } from "@/Styles/styled.general";

const schema = yup.object().shape({
  message: yup.string().required(),
});

const HOSPITAL_LIST: { id: string; name: string; image: string; subtitle: string; time: string }[] =
  [];

for (let i = 0; i < 100; i++) {
  HOSPITAL_LIST.push({
    id: i.toString(),
    name: "Hospital " + String.fromCharCode(65 + i),
    image: "https://picsum.photos/200",
    subtitle: "Subtitle",
    time: "12:00",
  });
}

const MyChatComponent = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [filter, setFilter] = useState<"all" | "read" | "not read">("all");
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const { user } = useUser();
  const router = useRouter();
  const { chats, sendMessage } = useChats(router.query.id as Id);
  const {
    register,
    control,
    reset,
    getValues,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleHospitalSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHospitalName(e.target.value);
  };

  const handleHospitalFilter = (filter: "all" | "read" | "not read") => {
    setFilter(filter);
  };

  const handleHospitalSelect = (hospital: string) => {
    setSelectedHospital(hospital);
  };
  const handleSendMessage = async () => {
    const chat: Chat = {
      id: Timestamp.now(),
      between: [user?.id as Id, router.query.id as Id],
      content: getValues("message"),
      sender_id: user?.id as Id,
      send_at: Timestamp.now(),
    };
    await sendMessage(chat);
    reset();
  };


  return (
    <Row gutter={24}>
      <Col span={0} md={8}>
        <ChatNavCard>
          <Sticky>
            <ChatActions className="backdrop-blur">
              <HospitalSearchInput
                placeholder="Search for a hospital"
                suffix={<SearchOutlined />}
                onChange={handleHospitalSearch}
                value={hospitalName}
              />
              <FilterButtonsWrapper>
                <FilterButton active={filter === "all"} onClick={() => handleHospitalFilter("all")}>
                  All
                </FilterButton>
                <FilterButton
                  active={filter === "read"}
                  onClick={() => handleHospitalFilter("read")}
                >
                  Read
                </FilterButton>
                <FilterButton
                  active={filter === "not read"}
                  onClick={() => handleHospitalFilter("not read")}
                >
                  Not Read
                </FilterButton>
              </FilterButtonsWrapper>
            </ChatActions>
          </Sticky>
          <HospitalList>
            {HOSPITAL_LIST.map((hospital, i) => (

                <HospitalListItem onClick={() => setSelectedHospital(hospital.name)} className={`bg-hover ${selectedHospital === hospital.name ? "active" : ""}`} key={hospital.id}>
                  <HospitalLine active={selectedHospital === hospital.name}>
                    <HospitalImage src={hospital.image} />
                    <HospitalInfo>
                      <HospitalTitle>{hospital.name}</HospitalTitle>
                      <HospitalSubtitle>{hospital.subtitle}</HospitalSubtitle>
                    </HospitalInfo>
                    <HospitalTime>{hospital.time}</HospitalTime>
                  </HospitalLine>
                </HospitalListItem>
            ))}
          </HospitalList>
        </ChatNavCard>
      </Col>
      <Col span={24} md={16}>
        <DetailedChatCard>
          <ChatCard id={router.query.id as Id} />
        </DetailedChatCard>
      </Col>
    </Row>
  );
};
export default MyChatComponent;
