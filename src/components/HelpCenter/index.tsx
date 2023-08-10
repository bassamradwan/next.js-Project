import FaqsListComponent from "./FaqsListComponent";
import {
  HelpCenterContainer,
  HelpCenterWrapper,
  TitleSubTitleHeading,
  Title,
  SubTitle,
  FAQSection,
  FaqsListWrapper,
} from "./Styled.HelpCenter";
import CategoiesListComponent from "@/Shared/CategoryList";
const faqs = [
  {
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    question: "Where can I get some?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];
const HelpCenter = () => {
  return (
    <HelpCenterContainer>
      <HelpCenterWrapper>
        <TitleSubTitleHeading>
          <Title>How can we help you?</Title>
          <SubTitle>Search our help center for quick answers</SubTitle>
        </TitleSubTitleHeading>
        {/* ---list of categories--- */}
        <CategoiesListComponent $bordercolor="#E1E1E1" />
        {/* ---FAQS section--- */}
        <TitleSubTitleHeading>
          <Title>How can we help you?</Title>
          <SubTitle>Search our help center for quick answers</SubTitle>
        </TitleSubTitleHeading>
        <FaqsListComponent faqs={faqs} />
      </HelpCenterWrapper>
    </HelpCenterContainer>
  );
};
export default HelpCenter;
