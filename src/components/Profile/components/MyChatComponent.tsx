import { useCallback, useEffect, useMemo, useState } from "react";
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
import { useRouter } from "next/router";
import { Chat, Id, User } from "@/types";
import { SearchOutlined } from "@ant-design/icons";
import ChatCard from "@/components/ChatCard";
import { Col, Row } from "antd";
import { Flex, Sticky } from "@/Styles/styled.general";
import useChats from "@/hooks/useChats";
import useUser from "@/hooks/useUser";
import moment from "moment/moment";

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
  const [selectedHospital, setSelectedHospital] = useState<User | null>(null);
  const [receiverIds, setReceiverIds] = useState<Id[]>([]);
  const [userProfiles, setUserProfiles] = useState<User[]>([]);

  const router = useRouter();
  const { id: userId } = router.query;
  const { chats, getChatByIds, deleteChat } = useChats(userId as Id);
  const { user, getUserById } = useUser();
  const [profilesRender, setProfilesRender] = useState<User[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHospitalName(e.target.value);
  };

  const handleHospitalFilter = (filter: "all" | "read" | "not read") => {
    setFilter(filter);
  };

  useEffect(() => {
    if (chats) {
      const data: Id[] = [];

      chats.forEach((chat: Chat) => {
        const id = user ? chat.between.find((id: Id) => id !== user.id) : null;
        if (id) {
          // @ts-ignore
          data.push(id);
        }
      });
      // @ts-ignore
      setReceiverIds(prev => [...new Set([...prev, ...data])] as Id[]);
    }
  }, [chats, user]);

  useMemo(() => {
    const profiles: User[] = [];
    const getAll = async () => {
      await Promise.all(
        receiverIds.map(async (receiverId: Id) => {
          try {
            const profile = await getUserById(receiverId);
            profiles.push(profile);
          } catch (e) {
            console.log(e);
            return;
          }
        }),
      );
    };
    getAll().then(() => {
      setUserProfiles(profiles);
    });
  }, [getUserById, receiverIds]);
  const getLatestMessage = useCallback(
    (sender_id: Id, receiver_id: Id) => {
      return getChatByIds([sender_id, receiver_id]).reverse()[0];
    },
    [getChatByIds],
  );

  useMemo(() => {
    if (!hospitalName) return setProfilesRender(userProfiles);
    const result = userProfiles.filter((profile: User) => {
      return (
        profile?.name?.toLowerCase().includes(hospitalName.toLowerCase()) ||
        profile?.email?.toLowerCase().includes(hospitalName.toLowerCase()) ||
        profile?.phone?.toLowerCase().includes(hospitalName.toLowerCase()) ||
        profile?.name?.toLowerCase().startsWith(hospitalName.toLowerCase()) ||
        profile?.email?.toLowerCase().startsWith(hospitalName.toLowerCase()) ||
        profile?.phone?.toLowerCase().startsWith(hospitalName.toLowerCase()) ||
        profile?.name?.toLowerCase().endsWith(hospitalName.toLowerCase()) ||
        profile?.email?.toLowerCase().endsWith(hospitalName.toLowerCase()) ||
        profile?.phone?.toLowerCase().endsWith(hospitalName.toLowerCase())
      );
    });

    setProfilesRender(result);
  }, [hospitalName, userProfiles]);

  const isRead = useCallback(
    (userId: Id, profileId: Id) => {
      const lastMessage = getLatestMessage(userId as Id, profileId);

      return lastMessage?.seen && lastMessage?.sender_id !== +userId;
    },
    [getLatestMessage],
  );

  useMemo(() => {
    if (!filter || filter === "all" || !userId) return setProfilesRender(userProfiles);
    const result = userProfiles.filter((profile: User) => {
      if (filter === "read") {
        return !!isRead(userId as Id, profile.id);
      } else {
        return !isRead(userId as Id, profile.id);
      }
    });

    setProfilesRender(result);
  }, [filter, isRead, userId, userProfiles]);

  const onDelete = useCallback(async (ids: Id[]) => {
    if (!selectedHospital) return;
    await deleteChat(ids);
    setSelectedHospital(null);
  }, [deleteChat, selectedHospital]);

  return (
    <>
      <Row gutter={24}>
        <Col span={0} md={8}>
          <ChatNavCard>
            <Sticky>
              <ChatActions className="backdrop-blur">
                <HospitalSearchInput
                  placeholder="Search for a hospital"
                  suffix={<SearchOutlined />}
                  onChange={handleSearch}
                  value={hospitalName}
                />
                <FilterButtonsWrapper>
                  <FilterButton
                    active={filter === "all"}
                    onClick={() => handleHospitalFilter("all")}
                  >
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
              {profilesRender.map((profile, i) => {
                const latestMessage = getLatestMessage(userId as Id, profile.id);
                if (!latestMessage) return null;
                return (
                  <HospitalListItem
                    onClick={() => setSelectedHospital(profile)}
                    className={`bg-hover ${selectedHospital?.id === profile.id ? "active" : ""}`}
                    key={profile.id}
                  >
                    <HospitalLine active={selectedHospital?.id === profile.id}>
                      <HospitalImage src={profile.image} />
                      <HospitalInfo>
                        <Flex justifyContent="space-between" alignItems="top">
                          <HospitalTitle>{profile.name}</HospitalTitle>
                          <HospitalTime>
                            {moment(latestMessage?.send_at.toDate()).fromNow(true)}
                          </HospitalTime>
                        </Flex>
                        <HospitalSubtitle
                          style={{
                            fontWeight: isRead(userId as Id, profile.id) ? 300 : 500,
                          }}
                        >
                          {latestMessage?.content.slice(0, 10)}...
                        </HospitalSubtitle>
                      </HospitalInfo>
                    </HospitalLine>
                  </HospitalListItem>
                );
              })}
            </HospitalList>
          </ChatNavCard>
        </Col>
        <Col span={24} md={16}>
          <DetailedChatCard>
            {selectedHospital && (
              <ChatCard id={router.query.id as Id} receiver={selectedHospital} onDelete={onDelete} />
            )}
          </DetailedChatCard>
        </Col>
      </Row>
    </>
  );
};
export default MyChatComponent;
