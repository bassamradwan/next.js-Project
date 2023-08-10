import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  TechnicianCardContainer,
  TechnicianCardImage,
  TechnicianCardInfo,
  TechnicianCardName,
  TechnicianCardRate,
  TechnicianCardJob,
  TechnicianCardSkills,
  TechnicianCardSkill,
  TechnicianCardCity,
  TechnicianCardBudget,
  TechnicianRow,
  TechnicianColumn,
  SaveTechnicianBtn,
  HorizontalDivider,
  PersonalProfileBtn,
} from "./StyledTechnicianCard";
import { useTranslations } from "next-intl";

interface technicianProps {
  id: number | string;
  name: string;
  rate: number | string;
  image: string;
  job: string | unknown;
  skills: string[];
  city: string;
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
  const router = useRouter();
  const t = useTranslations("Technicians");

  return (
    <TechnicianCardContainer>
      <SaveTechnicianBtn src="/lovebtn.svg" alt="save" />
      <TechnicianCardImage src={image} alt="technician" />
      <TechnicianCardName>{name}</TechnicianCardName>
      <TechnicianCardJob>
        {/* @ts-ignore */}
        {job}
      </TechnicianCardJob>

      <TechnicianCardRate>
        <Image src="/star.svg" alt="star" width={20} height={20} />
        Reviews ({rate})
      </TechnicianCardRate>
      <TechnicianCardSkills>
        {truncatedSkills.map((skill, index) => (
          <TechnicianCardSkill key={index}>{skill}</TechnicianCardSkill>
        ))}
        {remainingSkillsCount > 0 && (
          <TechnicianCardSkill>+{remainingSkillsCount}</TechnicianCardSkill>
        )}
      </TechnicianCardSkills>
      <HorizontalDivider />
      <TechnicianRow>
        <TechnicianColumn>
          <div>City</div>
          <TechnicianCardCity>{city}</TechnicianCardCity>
        </TechnicianColumn>
        <TechnicianColumn>
          <div>Budget</div>
          <TechnicianCardBudget>{budget}</TechnicianCardBudget>
        </TechnicianColumn>
      </TechnicianRow>

      <PersonalProfileBtn
        onClick={() => {
          router.push(`/user/${id}`);
        }}
      >
        {t("personalProfile")}
      </PersonalProfileBtn>
    </TechnicianCardContainer>
  );
};
export default TechnicianCardComponent;
