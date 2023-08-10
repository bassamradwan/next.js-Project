import { Button } from "antd";
import { EditInputGroup } from "../Profile/styles/styled.ChangeInfo";
import {
  ContactUsWrapper,
  ContactUsSection,
  ContactUsTitleAndSubtitle,
  ContactUsTitle,
  ContactUsSubtitle,
  ContactList,
  ContactItem,
  ContactItemIcon,
  ContactTitle,
  ContactSubtitle,
  ContactForm,
  GetInTouch,
  FormLine,
  InputGroup,
  InputLabel,
  FormInput,
  FormInputTextArea,
} from "./Styled.ContactUs";
const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <ContactUsSection>
        <GetInTouch>
          <ContactUsTitleAndSubtitle>
            <ContactUsTitle>Get in touch</ContactUsTitle>
            <ContactUsSubtitle>We are here to help you.</ContactUsSubtitle>
          </ContactUsTitleAndSubtitle>
          <ContactList>
            {/* icon and title and subtitle */}
            <ContactItem>
              <ContactItemIcon src="https://picsum.photos/200/300" alt="phone-call" />
              <contactTitleAndSubtitle>
                <ContactTitle>Call Us</ContactTitle>
                <ContactSubtitle>1-800-123-4567</ContactSubtitle>
              </contactTitleAndSubtitle>
            </ContactItem>
            <ContactItem>
              <ContactItemIcon src="https://picsum.photos/200/300" alt="phone-call" />
              <contactTitleAndSubtitle>
                <ContactTitle>Call Us</ContactTitle>
                <ContactSubtitle>1-800-123-4567</ContactSubtitle>
              </contactTitleAndSubtitle>
            </ContactItem>
            <ContactItem>
              <ContactItemIcon src="https://picsum.photos/200/300" alt="phone-call" />
              <contactTitleAndSubtitle>
                <ContactTitle>Call Us</ContactTitle>
                <ContactSubtitle>1-800-123-4567</ContactSubtitle>
              </contactTitleAndSubtitle>
            </ContactItem>
          </ContactList>
        </GetInTouch>
        <ContactForm>
          <ContactUsTitleAndSubtitle>
            <ContactUsTitle>Send us a message</ContactUsTitle>
            <ContactUsSubtitle>We are here to help you.</ContactUsSubtitle>
          </ContactUsTitleAndSubtitle>
          <form>
            <FormLine>
              <InputGroup>
                <InputLabel>Name</InputLabel>
                <FormInput type="text" placeholder="Enter your name" />
              </InputGroup>
              <InputGroup>
                <InputLabel>Email</InputLabel>
                <FormInput type="email" placeholder="Enter your email" />
              </InputGroup>
            </FormLine>
            <FormLine>
              <InputGroup>
                <InputLabel>Subject</InputLabel>
                <FormInputTextArea rows="5" placeholder="Enter your subject" />
              </InputGroup>
            </FormLine>
            <Button type="primary">Send Message</Button>
          </form>
        </ContactForm>
      </ContactUsSection>
    </ContactUsWrapper>
  );
};
export default ContactUs;
