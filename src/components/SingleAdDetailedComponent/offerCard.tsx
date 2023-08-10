import { useRouter } from "next/router";
import { EditInfoButton } from "../Profile/styles/styled.ChangeInfo";
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
import useOffers from "@/hooks/useOffer";
import { useMemo } from "react";
import { toast } from "react-toastify";

interface offerCardProps {

  image: string;
  name: string;
  title: string | undefined | null;
  city: string;
  date: string;
  rate: number;
  description: string;
  price: number | undefined | null;
  id: Id;
  userId: Id;
}

const OfferCard = (props: offerCardProps) => {
  const router = useRouter();
  const orderId = useMemo<Id>(() => router.query.id! as Id, []);

  const { completeOffer, rejectOffer, acceptOffer } = useOffers(orderId);

  const onComplete = async () => {
    try {
      await completeOffer(orderId, props.id);
      toast.success("Offer completed successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const onReject = async () => {
    try {
      await rejectOffer(orderId, props.id);
      toast.success("Offer rejected successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const onAccept = async () => {
    try {
      await acceptOffer(orderId, props.id);
      toast.success("Offer accepted successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <OfferCardWrapper
    // onClick={() => {
    //   router.push(`/user/${props.id}`);
    // }}
    >
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
            <MetaItem>
              <MetaIcon src="/calendar.svg" />
              {props.date}
            </MetaItem>
          </MetaRow>
          <MetaDescription>{props.description}</MetaDescription>
        </TechnicainMeta>
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
