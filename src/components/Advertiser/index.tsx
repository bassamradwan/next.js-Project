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
  Paragraph,
  PrefIcon,
  PrefItem,
  PrefLabelWrapper,
  PrefList,
  PrefText,
  PrefValue,
} from "./StyledAdvertiser";
import { useRouter } from "next/router";
import { Id, User } from "@/types";

const Advertiser: React.FC = (props) => {
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

  const router = useRouter();
  const { getUserById } = useUser();
  const userId = useMemo(() => router.query.id as Id, [router.query.id]);

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
      <pre>{JSON.stringify(user, null, 2)}</pre>
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
            <HeadingTitle>Latest Projects:</HeadingTitle>
            {/* Ads Cards i can reuse the Ads in the HomePage */}
            <AdsListComponentWrapper>
              <AdsListComponent $columnsCount={1} />
            </AdsListComponentWrapper>
          </AdvertiserDetails>
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
              <ContactButton>contact us</ContactButton>
            </PrefList>
          </AdvertiserCard>
        </AdvertiserWrapper>
      </AdvertiserContainer>
    </>
  );
};
export default Advertiser;
