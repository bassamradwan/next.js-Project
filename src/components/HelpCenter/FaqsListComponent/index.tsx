import { useState } from "react";
import { Collapse } from "antd";
import styled from "styled-components";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

const FAQsContainer = styled.div``;

const FAQsComponent = ({ faqs }: Props) => {
  const [activeKey, setActiveKey] = useState<string | string[]>([]);

  const handleClick = (key: string | string[]) => {
    setActiveKey(key);
  };

  return (
    <FAQsContainer>
      <Collapse activeKey={activeKey} onChange={handleClick}>
        {faqs.map((faq, index) => (
          <Collapse.Panel header={faq.question} key={index}>
            <p>{faq.answer}</p>
          </Collapse.Panel>
        ))}
      </Collapse>
    </FAQsContainer>
  );
};

export default FAQsComponent;
