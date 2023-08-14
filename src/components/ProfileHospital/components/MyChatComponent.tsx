import { useState } from "react";
import {
  ChatNavCard,
  ChatOverflow,
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
  Wrapper,
} from "../../Profile/styles/styled.Chat";
import useChats from "@/hooks/useChats";
import { useRouter } from "next/router";
import { Chat, Id } from "@/types";
import { Col, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Flex, FlexColumn, Message, SendButton } from "@/Styles/styled.general";
import useUser from "@/hooks/useUser";
import { Timestamp } from "firebase/firestore";

const MyChatComponent = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [filter, setFilter] = useState<"all" | "read" | "not read">("all");
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const { user } = useUser();
  const router = useRouter();
  const { chats, sendMessage } = useChats(router.query.id as Id);

  const handleHospitalSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHospitalName(e.target.value);
  };

  const handleHospitalFilter = (filter: "all" | "read" | "not read") => {
    setFilter(filter);
  };

  const handleHospitalSelect = (hospital: string) => {
    setSelectedHospital(hospital);
  };
  const handleSendMessage = async (message: string) => {
    const chat: Chat = {
      id: Timestamp.now(),
      between: [user?.id as Id, router.query.id as Id],
      content: message,
      sender_id: user?.id as Id,
      send_at: Timestamp.now(),
    };
    await sendMessage(chat);
  };

  return (
    <Wrapper>
      <ChatNavCard>
        {/* search in the chats by name */}
        <HospitalSearchInput
          placeholder="Search for a hospital"
          suffix={<SearchOutlined />}
          onChange={handleHospitalSearch}
          value={hospitalName}
        />

        {/* filter the hospitals by [all,read,not read] */}
        <FilterButtonsWrapper>
          <FilterButton active={filter === "all"} onClick={() => handleHospitalFilter("all")}>
            All
          </FilterButton>
          <FilterButton active={filter === "read"} onClick={() => handleHospitalFilter("read")}>
            Read
          </FilterButton>
          <FilterButton
            active={filter === "not read"}
            onClick={() => handleHospitalFilter("not read")}
          >
            Not Read
          </FilterButton>
        </FilterButtonsWrapper>

        {/* list all the hospitals that has chat with me  */}
        <HospitalList>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital A")}>
            <HospitalLine active={selectedHospital === "Hospital A"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital A</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital B")}>
            <HospitalLine active={selectedHospital === "Hospital B"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital B</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital C")}>
            <HospitalLine active={selectedHospital === "Hospital C"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital C</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital D")}>
            <HospitalLine active={selectedHospital === "Hospital D"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital D</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital E")}>
            <HospitalLine active={selectedHospital === "Hospital E"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital E</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital F")}>
            <HospitalLine active={selectedHospital === "Hospital F"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital F</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital G")}>
            <HospitalLine active={selectedHospital === "Hospital G"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital G</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital H")}>
            <HospitalLine active={selectedHospital === "Hospital H"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital H</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital I")}>
            <HospitalLine active={selectedHospital === "Hospital I"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital I</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
          <HospitalListItem onClick={() => handleHospitalSelect("Hospital J")}>
            <HospitalLine active={selectedHospital === "Hospital J"}>
              <HospitalImage src="https://picsum.photos/200" />
              <HospitalInfo>
                <HospitalTitle>Hospital J</HospitalTitle>
                <HospitalSubtitle>Subtitle</HospitalSubtitle>
              </HospitalInfo>
              <HospitalTime>12:00</HospitalTime>
            </HospitalLine>
          </HospitalListItem>
        </HospitalList>
      </ChatNavCard>
      <DetailedChatCard>
        <ChatOverflow>
          <div style={{ padding: 20 }}>
            {chats.map((chat, i) => (
              <FlexColumn
                alignItems={chat.sender_id == user?.id ? "end" : "start"}
                key={i}
                dir="auto"
              >
                <Flex justifyContent="space-between">
                  <small>Send Date: {chat.send_at.toDate().toDateString()}</small>&nbsp;
                  <small>Sender Id: {chat.sender_id}</small>
                </Flex>
                <Message>
                  <Flex justifyContent={chat.sender_id == user?.id ? "end" : "start"}>
                    <p>{chat.content}</p>
                  </Flex>
                </Message>
              </FlexColumn>
            ))}
          </div>
        </ChatOverflow>
        <Row gutter={4} justify={"space-between"} align={"middle"} style={{ padding: 20 }}>
          <Col span={20} md={{ span: 22 }}>
            <Input
              onPressEnter={(e) => handleSendMessage(e.target.value)}
              dir={"auto"}
              placeholder="Write Your Message Here"
            />
          </Col>

          <Col span={4} md={{ span: 2 }}>
            <SendButton>
              <img src={"/send.svg"} />
            </SendButton>
          </Col>
        </Row>
      </DetailedChatCard>
    </Wrapper>
  );
};

export default MyChatComponent;
