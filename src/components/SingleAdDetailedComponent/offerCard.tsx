import {
  MetaDescription,
  MetaIcon,
  MetaItem,
  MetaRow,
  OfferCardWrapper,
  OfferPrice,
  TechnicainMeta,
  TechnicianColumn,
  TechnicianImage,
  TechnicianInfo,
  TechnicianName,
  TechnicianTitle,
  TechnicianWrapper,
} from "./StyledOfferCard";
import { CurrencyCode, Id } from "@/types";
import { Divider } from "antd";

interface offerCardProps {
  image: string;
  name: string;
  title: string | undefined | null;
  city: string;
  rate: number;
  description: string;
  price: number | undefined | null;
  id: Id;
  userId: Id;
}

const OfferCard = (props: offerCardProps) => {
  return (
    <OfferCardWrapper>
      <TechnicianInfo>
        <TechnicianWrapper>
          <TechnicianImage src={props.image} />
          <TechnicianColumn>
            <TechnicianName>{props.name}</TechnicianName>
            <TechnicianTitle>{props.title}</TechnicianTitle>
          </TechnicianColumn>
        </TechnicianWrapper>
        <TechnicainMeta>
          <MetaRow>
            <MetaItem>
              <MetaIcon src="/star.svg" />
              Reviews ({props.rate})
            </MetaItem>
            <MetaItem>
              <MetaIcon src="/location.svg" />
              {props.city}
            </MetaItem>
          </MetaRow>
        </TechnicainMeta>
        <Divider />
        <MetaDescription>{props.description}</MetaDescription>
      </TechnicianInfo>
      <TechnicainMeta>
        <OfferPrice>
          {props.price}
          {CurrencyCode.EGP}
        </OfferPrice>
        {/* <EditInfoButton onClick={onAccept}>{props.typebutton}</EditInfoButton>

        <EditInfoButton onClick={onReject}>Reject</EditInfoButton>

        <EditInfoButton onClick={onComplete}>Complete</EditInfoButton> */}
      </TechnicainMeta>
    </OfferCardWrapper>
  );
};
export default OfferCard;
