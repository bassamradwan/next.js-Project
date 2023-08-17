import { useTranslations } from "next-intl";
import HeadingSectionComponent from "../HeadingSectionComponent";
import { BackSvg, SectionBtn } from "../HeadingSectionComponent/StyledHeading";
import {
  CarousalContainer,
  TabWrapper,
  TechniciansContainer,
  StyledCarousel,
} from "./StyledTechnicians";
import TechnicianCardComponent from "./TechnicianCardComponent";
import { useMedia } from "react-use";
import { useTechnicians } from "@/hooks/useTechnicians";
import { useEffect, useState } from "react";
import { Button, Empty } from "antd";

const Technicians = ({
  keyWord,
  setKeyWord,
}: {
  keyWord: string;
  setKeyWord: (value: string) => void;
}) => {
  const isMobile = useMedia("(max-width: 768px)", true);
  const [technicians, setTechnicians] = useState<any[]>([]);
  const { data } = useTechnicians(keyWord);
  const t = useTranslations("Home");

  useEffect(() => {
    setTechnicians(
      data?.map(technician => {
        return {
          id: technician.id,
          name: technician.name,
          job: technician.specialization,
          rate: technician.rate,
          // reviews: technician.reviews,
          // image: technician.image,
          reviews: 25,
          image: "https://picsum.photos/200/300",
          skills: ["Electricity", "Plumbing", "Carpentry"],
          // skills: technician.skills,
          budget: technician.average_cost,
          city: technician.city,
        };
      }) || [],
    );
  }, [data, keyWord]);

  const onChange = (currentSlide: number) => {
  };
  // antd no data component with button
  if (!technicians.length)
    return (
      <Empty
        imageStyle={{
          height: 120,
        }}
        description={
          <div style={{ display: "flex", flexDirection: "column" }}>
            {t("noTechniciansFound")}
            <Button
              type="primary"
              onClick={() => {
                setKeyWord("");
              }}
              style={{
                width: 200,
                alignSelf: "center",
                margin: "20px 0",
              }}
            >
              {t("showAvailableTechnicians")}
            </Button>
          </div>
        }
      />
    );
  const technicianCards = technicians.map((technician, index) => {
    if (!isMobile) {
      if (index % 4 === 0) {
        return (
          <TabWrapper key={index}>
            <TechnicianCardComponent {...technician} />
            {technicians[index + 1] && <TechnicianCardComponent {...technicians[index + 1]} />}
            {technicians[index + 2] && <TechnicianCardComponent {...technicians[index + 2]} />}
            {technicians[index + 3] && <TechnicianCardComponent {...technicians[index + 3]} />}
          </TabWrapper>
        );
      }
      return null;
    } else {
      // show only one card
      if (index % 1 === 0) {
        return (
          <TabWrapper key={index}>
            <TechnicianCardComponent {...technician} />
          </TabWrapper>
        );
      }
      return null;
    }
  });

  return (
    <TechniciansContainer id="technicians">
      <HeadingSectionComponent
        BtnTxt={t("showAllTechnicians")}
        HeadingTxt={t("ourTechnicians")}
        SubHeadingTxt={t("ourTechniciansSubtitle")}
      />
      <CarousalContainer>
        <StyledCarousel afterChange={onChange} dots={true} autoplay={true} autoplaySpeed={5000}>
          {technicianCards}
        </StyledCarousel>
      </CarousalContainer>
      {isMobile && (
        <SectionBtn>
          <BackSvg src="/back.svg" alt="" />
          {t("showAllTechnicians")}
        </SectionBtn>
      )}
    </TechniciansContainer>
  );
};
export default Technicians;


