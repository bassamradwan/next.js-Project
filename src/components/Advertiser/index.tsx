import AdsListComponent from "@/components/AdsList/General";
import useUser from "@/hooks/useUser";
import { useEffect, useMemo, useState } from "react";

import {
  AdsListComponentWrapper,
  AdvertiserCard,
  AdvertiserContainer,
  AdvertiserDetails,
  AdvertiserWrapper,
  ContactButton,
  Divider,
  HeadingTitle,
  Itime,
  ItimeCard,
  ItimeSkillsCard,
  Paragraph,
  PrefIcon,
  PrefItem,
  PrefLabelWrapper,
  PrefList,
  PrefText,
  PrefValue,
  SkillsCard,
} from "./StyledAdvertiser";
import { useRouter } from "next/router";
import { Id, User } from "@/types";
import { Modal } from "antd";
import ChatCard from "@/components/ChatCard";

const Advertiser: React.FC = props => {
  const [user, setUser] = useState<User>({
    about: "",
    accomplish_tasks: 0,
    address: "",
    average_cost: 0,
    birth_date: "",
    certificates: [],
    city_id: "",
    email: "",
    experiences: [],
    graduation_year: "",
    id: 0,
    image: "",
    last_name: "",
    name: "",
    phone: "",
    rate: 0,
    skills: [],
    specialization: "",
    type: "",
    university: "",
  });
  const [showContactModal, setShowContactModal] = useState(false);

  const router = useRouter();
  const { getUserById } = useUser();
  const userId = useMemo(() => router.query.id as Id, [router.query.id]);
  const { user: currentUser } = useUser();

  useEffect(() => {
    if (userId) {
      getUserById(userId).then(res => {
        setUser(res);
      });
    }
  }, [getUserById, userId]);

  console.log(userId);

  return (
    <>
      <AdvertiserContainer>
        <AdvertiserWrapper>
          <AdvertiserDetails>
            {user.about && (
              <>
                <HeadingTitle>Who we are:</HeadingTitle>
                <Paragraph>{user?.about}</Paragraph>
                <Divider />
              </>
            )}
            {/* Ads Cards i can reuse the Ads in the HomePage */}
            {user.type == "hospital" && (
              <>
                <HeadingTitle>Latest Projects:</HeadingTitle>
                <AdsListComponentWrapper>
                  <AdsListComponent $columnsCount={1} />
                </AdsListComponentWrapper>
                <Divider />
              </>
            )}
            <HeadingTitle>certificates</HeadingTitle>
            <div>
              {user.certificates?.map((skill, index) => (
                <div
                  style={{ display: "flex", flexDirection: "column", padding: "5px" }}
                  key={index}
                >
                  <Itime>{skill?.year}</Itime>
                  <span style={{ color: "#006D64" }}>{skill?.title}</span>
                </div>
              ))}
            </div>
            <Divider />
            <HeadingTitle>experiences</HeadingTitle>
            <div>
              {user.experiences?.map((skill, index) => (
                <div
                  style={{ display: "flex", flexDirection: "column", padding: "5px" }}
                  key={index}
                >
                  <Itime>{skill?.year}</Itime>
                  <span>{skill?.title}</span>
                  <span style={{ color: "#006D64" }}>{skill?.desc}</span>
                </div>
              ))}
            </div>
            <Divider />
          </AdvertiserDetails>
          <div>
            <AdvertiserCard>
              <HeadingTitle>Pref about us</HeadingTitle>
              <PrefList>
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/Nurse.svg" />
                    <PrefText>Speciality</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{user?.type}</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/Medical Kit.svg" />
                    <PrefText>Projects</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{user?.accomplish_tasks}</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/Pill.svg" />
                    <PrefText>Speciality</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>تاريخ التسجيل</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/briefcase.svg" />
                    <PrefText>Email</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{user?.email}</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/Healthcare Call.svg" />
                    <PrefText>Phone</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{user?.phone}</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/location.svg" />
                    <PrefText>Address</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{user?.address}</PrefValue>
                </PrefItem>
                <ContactButton onClick={() => setShowContactModal(true)}>contact us</ContactButton>
              </PrefList>
            </AdvertiserCard>
            <SkillsCard>
              <HeadingTitle style={{ margin: "5px" }}> My Skills</HeadingTitle>
              <ItimeSkillsCard>
                {user.skills?.map((skill, index) => (
                  <ItimeCard key={index}>
                    <Itime>{skill}</Itime>
                  </ItimeCard>
                ))}
              </ItimeSkillsCard>
            </SkillsCard>
          </div>
        </AdvertiserWrapper>
      </AdvertiserContainer>
      <Modal open={showContactModal} footer={null} onCancel={() => setShowContactModal(false)}>
        {/* ts-ignore*/}
        <ChatCard
          id={currentUser?.id as Id}
          receiver={user}
          onDelete={(id: Id[]) => new Promise((resolve, reject) => {})}
        />
      </Modal>
    </>
  );
};
export default Advertiser;
