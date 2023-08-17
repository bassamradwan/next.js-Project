import AdsListComponent from "@/components/AdsList/General";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import {  useEffect, useMemo } from "react";

import {
  AdvertiserWrapper,
  AdvertiserDetails,
  HeadingTitle,
  Paragraph,
  Divider,
  AdvertiserCard,
  PrefList,
  PrefItem,
  PrefIcon,
  PrefText,
  PrefValue,
  PrefLabelWrapper,
  AdvertiserContainer,
  ContactButton,
  AdsListComponentWrapper,
} from "./StyledAdvertiser";
const Advertiser: React.FC = () => {
const router = useRouter()
 const {getUserById}=useUser()

 const user=useMemo(async()=>{
    return await getUserById(router.query.id as string).then(res=>res);

   },[router.query.id])
  useEffect(()=> {
    if(user){
      console.log(user)
    }

  },[user]);
 
 
  return (
    <AdvertiserContainer>
      <AdvertiserWrapper>
        <AdvertiserDetails>
          <HeadingTitle>Who we are:</HeadingTitle>
          <Paragraph>
          {/* {user?.about} */}
          </Paragraph>
          <Divider />
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
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Projects</PrefText>
              </PrefLabelWrapper>
              <PrefValue>250</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <ContactButton>contact us</ContactButton>
          </PrefList>
        </AdvertiserCard>
      </AdvertiserWrapper>
    </AdvertiserContainer>
  );
};
export default Advertiser;
