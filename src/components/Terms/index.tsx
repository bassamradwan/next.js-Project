import styled from "styled-components";

const TermsPageContainer = styled.div`
  padding: 30px 10%;
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const TermSection = styled.div`
  margin-bottom: 20px;
`;

const TermTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TermDescription = styled.p`
  font-size: 16px;
  width: 50%;
`;

const TermsPage = () => {
  return (
    <TermsPageContainer>
      <Title>Terms and Conditions</Title>
      <Subtitle>Introduction</Subtitle>

      <TermSection>
        <TermTitle>Term 1</TermTitle>
        <TermDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam
          ultricies, nunc nisl aliquet
        </TermDescription>
      </TermSection>

      <TermSection>
        <TermTitle>Term 2</TermTitle>
        <TermDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam
          ultricies, nunc nisl aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          euismod, nisl eget aliquam ultricies, nunc nisl aliquet
        </TermDescription>
      </TermSection>

      <TermSection>
        <TermTitle>Term 3</TermTitle>
        <TermDescription>Description 3</TermDescription>
      </TermSection>
      <TermSection>
        <TermTitle>Term 4</TermTitle>
        <TermDescription>Description 4</TermDescription>
      </TermSection>
    </TermsPageContainer>
  );
};

export default TermsPage;
