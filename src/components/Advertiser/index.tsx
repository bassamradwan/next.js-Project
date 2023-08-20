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
  SpanTitle,
} from "./StyledAdvertiser";
import { useRouter } from "next/router";
import {  User } from "@/types";
import { Button, Modal, Spin } from "antd";
import ChatCard from "@/components/ChatCard";
import { toast } from "react-toastify";
import moment from "moment/moment";
import { DateTimeFormatOptions } from "next-intl";
import useRates from "@/hooks/useRate";
import { FormInputTextArea, FormLine, InputGroup, InputLabel } from "../BlogDetail/Styled.BlogDetails";
import { SpinLight } from "@/Styles/styled.general";
import { AdsCardImage, AdsCardTitle, AdsSubTitle, AdTitleAndImg, ImageWrapper, TitleWrapper } from "../AdsList/General/StyledGeneralAds";

type PropsType = {
  user: User; // حيث User هو نوع البيانات المعرف بالفعل
};

type Id = number |string; // أو

const Advertiser: React.FC<PropsType> = props => {
 
  const [showContactModal, setShowContactModal] = useState(false);
  const router = useRouter();
  const {} = useRates();
  // const userId = useMemo(() => router.query.id as Id, [router.query.id]);
  const userId = useMemo(() => router.query.id as Id, [router.query.id]);
  const [userid,setuserid]=useState()
  const {getAll,gitRate,add}=useRates();
  const { user: currentUser } = useUser();
console.log();
   // Format Date
   function formatDate(dateString: string) {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  }

  const [value, setValue] = useState(50);
  const [scaledWidth, setScaledWidth] = useState(0);

  useEffect(() => {
    const maxWidth =100; // العرض الأقصى للشريط
    const newScaledWidth = (value / 10) * maxWidth; // حساب العرض المقاس
    setScaledWidth(newScaledWidth);
  }, [value]);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (userId && gitRate) {
  //       try {
  //         const userRate = await gitRate();
  //         setuserid();
  //       } catch (e) {
  //         toast.error("Something went wrong");
  //       }
  //     }
  //   };
  
  //   fetchUserData();
  // }, [gitRate, userId]);
  


  // useEffect(() => {
  //   if (userId) {
  //     try {
  //       gitRate(userId).then(res => {
  //         setuserid(res);
  //       });
  //     } catch (e: any) {
  //       toast.error("Something Error")
  //     }
  //   }
  // }, [gitRate, userId]);

  return (
    <>
      <AdvertiserContainer>
        <AdvertiserWrapper>
          <AdvertiserDetails>
            {props.user.about && (
              <>
                <HeadingTitle>Who we are:</HeadingTitle>
                <Paragraph>{props.user?.about}</Paragraph>
                <Divider />
              </>
            )}
            {/* Ads Cards i can reuse the Ads in the HomePage */}
            {props.user.type == "hospital" && (
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
              {props.user.certificates?.map((skill, index) => (
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
            <HeadingTitle><PrefIcon src="/Ellipse 17.svg" />experiences</HeadingTitle>
            <PrefIcon src="/Rectangle 18.svg" />
            <div>
              {props.user.experiences?.map((skill, index) => (
                
                <div
                  style={{ display: "flex", flexDirection: "column", padding: "5px" }}
                  key={index}
                >
                  <div style={{ display: "flex", padding: "5px" }}>
                  <PrefIcon src="/Ellipse 17.svg" />
                  <Itime>{skill?.year}</Itime>
                  </div>
                  <SpanTitle style={{marginLeft:"10px"}}>{skill?.title}</SpanTitle>
                  <span style={{ color: "#006D64" }}>{skill?.desc}</span>
                </div>
              ))}
            </div>
            <Divider />
            <HeadingTitle>Ratings</HeadingTitle>
            {/* <div style={{ display: "flex"}}>
              <div >

              </div>
              <div>

              </div> */}
           <div style={{display:'flex'}}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                
              }}
            >
              <div
                style={{
                  width: scaledWidth,
                  height: '20px',
                  backgroundColor: '#00c4b7',
                  transition: 'width 0.5s ease-in-out',
                  borderRadius: '10px',
                  
                }}
              ></div>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginLeft: '10px',
                }}
              >
                {value.toFixed(1)}%
              </span>
            </div>
            <div style={{
              backgroundColor:"#F8F8F8",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
              padding:"10px",
              margin:"10px",
              width:"100%",
              }}>
               <h1>5.6</h1>
               <img src="/Rectangle 18.svg"/>
               <p>ffff</p>
            </div>
    </div>

            <Divider />
            <HeadingTitle>Ratings</HeadingTitle>
               <AdTitleAndImg>
                 <ImageWrapper>
                   <AdsCardImage src="/Rectangle 18.svg" />
                 </ImageWrapper>
                 <TitleWrapper>
                   <AdsCardTitle >
                    title
                   </AdsCardTitle>
                   <AdsSubTitle>sub title</AdsSubTitle>
                 </TitleWrapper>
               </AdTitleAndImg>
            <Divider />
            <HeadingTitle>Add a comment</HeadingTitle>
            <FormLine>
              <InputGroup>
                <InputLabel>{("التعليق")}</InputLabel>
                {/* @ts-ignore */}
                <FormInputTextArea rows="5" 
                 placeholder={("اكتب رسالتك هنا واجعل النص مختصرا")} 
                  name="message"
                
                 />
              </InputGroup>
            </FormLine>
              <SpinLight>
               <Spin >
                 <Button  type="primary" >Send Message</Button>
               </Spin>
              </SpinLight>
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
                  <PrefValue>{props.user?.type}</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/Medical Kit.svg" />
                    <PrefText>Projects</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{props.user?.accomplish_tasks}</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/Pill.svg" />
                    <PrefText>Created At</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue> 
                    {formatDate(props.user?.created_at)}
                    {/* {moment(props.user?.created_at.toString()).fromNow(false)} */}

                    </PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/briefcase.svg" />
                    <PrefText>Email</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{props.user?.email}</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/Healthcare Call.svg" />
                    <PrefText>Phone</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{props.user?.phone}</PrefValue>
                </PrefItem>
                <Divider />
                <PrefItem>
                  <PrefLabelWrapper>
                    <PrefIcon src="/location.svg" />
                    <PrefText>Address</PrefText>
                  </PrefLabelWrapper>
                  <PrefValue>{props.user?.address}</PrefValue>
                </PrefItem>
                <ContactButton onClick={() => setShowContactModal(true)}>contact us</ContactButton>
              </PrefList>
            </AdvertiserCard>
            <SkillsCard>
              <HeadingTitle style={{ margin: "5px" }}> My Skills</HeadingTitle>
              <ItimeSkillsCard>
                {props.user.skills?.map((skill, index) => (
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
          receiver={props.user}
          onDelete={(id: Id[]) => new Promise((resolve, reject) => {})}
        />
      </Modal>
    </>
  );
};
export default Advertiser;
