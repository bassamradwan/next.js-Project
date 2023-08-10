import { Collapse } from "antd";
import styled from "styled-components";

const { Panel } = Collapse;

const FaqsContainer = styled.div`
  padding: 50px 10%;
`;
const FaqsTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;

const Faqs = () => {
  return (
    <FaqsContainer>
      <FaqsTitle>Frequently Asked Questions</FaqsTitle>
      <Collapse accordion>
        <Panel header="Question 1" key="1">
          <p>Answer 1</p>
        </Panel>
        <Panel header="Question 2" key="2">
          <p>Answer 2</p>
        </Panel>
        <Panel header="Question 3" key="3">
          <p>Answer 3</p>
        </Panel>
      </Collapse>
    </FaqsContainer>
  );
};

export default Faqs;
