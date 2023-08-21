import Image from "next/image";
import { useRouter } from "next/router";
import {
  HorizontalDivider,
  PersonalProfileBtn,
  SaveTechnicianBtn,
  TechnicianCardBudget,
  TechnicianCardCity,
  TechnicianCardContainer,
  TechnicianCardImage,
  TechnicianCardJob,
  TechnicianCardName,
  TechnicianCardRate,
  TechnicianCardSkill,
  TechnicianCardSkills,
  TechnicianColumn,
  TechnicianRow,
  TechnicianTitle,
} from "./StyledTechnicianCard";
import { useTranslations } from "next-intl";

interface technicianProps {
  id: number | string;
  name: string;
  rate: number | string;
  image: string;
  job: string | unknown;
  skills: string[];
  city: any;
  budget: number | string;
}

const TechnicianCardComponent = ({
  name,
  rate,
  image,
  job,
  skills,
  city,
  budget,
  id,
}: technicianProps) => {
  const truncatedSkills = skills.slice(0, 2);
  const remainingSkillsCount = skills.length - truncatedSkills.length;
  const t = useTranslations("Technicians");
  const router = useRouter();

  return (
    <>
      <TechnicianCardContainer>
      <SaveTechnicianBtn src="/lovebtn.svg" alt="save" />
        <div style={{display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems: "center",
      
      }}>
        <TechnicianCardImage src={image} alt="technician" />
        <TechnicianCardName>{name}</TechnicianCardName>
        <TechnicianCardJob>
          {/* @ts-ignore */}
          {job}
        </TechnicianCardJob>
        <TechnicianCardRate>
          <Image src="/star.svg" alt="star" width={20} height={20} />
          Reviews <span style={{color:"#1A2D2C",fontFamily: "Bahij TheSansArabic"}}>({rate})</span>
        </TechnicianCardRate>
        <TechnicianCardSkills>
          {truncatedSkills.map((skill, index) => (
            <TechnicianCardSkill key={index}>{skill}</TechnicianCardSkill>
          ))}
          {remainingSkillsCount > 0 && (
            <span style={{color:"#006D64"}}>+{remainingSkillsCount}</span>
          )}
        </TechnicianCardSkills>
        </div>
       
        <HorizontalDivider />
        <TechnicianRow>
          <TechnicianColumn>
            <TechnicianTitle>المدينه</TechnicianTitle>
            <TechnicianCardCity>{city?.name?.en}</TechnicianCardCity>
          </TechnicianColumn>
          <TechnicianColumn>
            <TechnicianTitle>Budget</TechnicianTitle>
            <TechnicianCardBudget>{budget}ج.م/الفحص</TechnicianCardBudget>
          </TechnicianColumn>
        </TechnicianRow>

        <PersonalProfileBtn
          onClick={() => {
            router.push(`/user/${id}?locale=en`);
          }}
        >
          {t("personalProfile")}
        </PersonalProfileBtn>
      </TechnicianCardContainer>
    </>
  );
};
export default TechnicianCardComponent;
