import { useSettings } from "@/hooks/useSettings";
import { Button } from "antd";
import { useForm } from "react-hook-form";
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
  const { settings } = useSettings();
  const { register, setValue, handleSubmit, control } = useForm();

const contactUs = settings?.contacts || {}; 

// add Contact
const addContact = async(data)=>{
  console.log(data);

try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  console.log(res);
  
}
  catch(err) {
    console.log(err);
  }
};

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
                <ContactTitle>Phone</ContactTitle>
                <ContactSubtitle>{contactUs.phone}</ContactSubtitle>
              </contactTitleAndSubtitle>
            </ContactItem>
            <ContactItem>
              <ContactItemIcon src="https://picsum.photos/200/300" alt="phone-call" />
              <contactTitleAndSubtitle>
                <ContactTitle>Whats App </ContactTitle>
                <ContactSubtitle>{contactUs.whats_app}</ContactSubtitle>
              </contactTitleAndSubtitle>
            </ContactItem>
            <ContactItem>
              <ContactItemIcon src="https://picsum.photos/200/300" alt="phone-call" />
              <contactTitleAndSubtitle>
                <ContactTitle>Facebook</ContactTitle>
                <ContactSubtitle>{contactUs.facebook}</ContactSubtitle>
              </contactTitleAndSubtitle>
            </ContactItem>
            <ContactItem>
              <ContactItemIcon src="https://picsum.photos/200/300" alt="phone-call" />
              <contactTitleAndSubtitle>
                <ContactTitle>Twitter</ContactTitle>
                <ContactSubtitle>{contactUs.twitter}</ContactSubtitle>
              </contactTitleAndSubtitle>
            </ContactItem>
          </ContactList>
        </GetInTouch>
        <ContactForm>
          <ContactUsTitleAndSubtitle>
            <ContactUsTitle>Send us a message</ContactUsTitle>
            <ContactUsSubtitle>We are here to help you.</ContactUsSubtitle>
          </ContactUsTitleAndSubtitle>
          <form onSubmit={handleSubmit(addContact)}> 
            <FormLine>
              <InputGroup>
                <InputLabel>Name</InputLabel>
                <FormInput type="text" placeholder="Enter your name" 
                {...register("name")}
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>Email</InputLabel>
                <FormInput 
                type="email"
                 placeholder="Enter your email" 
                 {...register("email")}
                 />
              </InputGroup>
            </FormLine>
            <FormLine>
              <InputGroup>
                <InputLabel>Subject</InputLabel>
                <FormInputTextArea rows="5" placeholder="Enter your subject" 
                {...register("message")}
                />
              </InputGroup>
            </FormLine>
            <button type="submit">Send Message</button>
            {/* <Button type="submit">Send Message</Button> */}
          </form>
        </ContactForm>
      </ContactUsSection>
    </ContactUsWrapper>
  );
};
export default ContactUs;
