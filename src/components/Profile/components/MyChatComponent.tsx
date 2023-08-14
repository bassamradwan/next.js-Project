import { useState } from "react";
import {
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
  Wrapper,
} from "../styles/styled.Chat";
import { SearchOutlined } from "@ant-design/icons";

const MyChatComponent = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [filter, setFilter] = useState<"all" | "read" | "not read">("all");
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);

  const handleHospitalSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHospitalName(e.target.value);
  };

  const handleHospitalFilter = (filter: "all" | "read" | "not read") => {
    setFilter(filter);
  };

  const handleHospitalSelect = (hospital: string) => {
    setSelectedHospital(hospital);
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
      {/* <DetailedChatCard hospital={selectedHospital} /> */}
      <DetailedChatCard />
    </Wrapper>
  );
};

export default MyChatComponent;
