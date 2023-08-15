import { useRouter } from "next/router";
import { ButtonShared } from "../ButtonComponent/Style.button";
import OfferCard from "../SingleAdDetailedComponent/offerCard";
import { Id } from "@/types";
import useOffers from "@/hooks/useOffer";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { TechnicianColumn } from "../SingleAdDetailedComponent/StyledOfferCard";
import { OfferCardWrapper } from '@/components/SingleAdDetailedComponent/StyledOfferCard';

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

const CardOfferWithButton = (props: offerCardProps) => {
  const router = useRouter();
  const orderId = useMemo<Id>(() => router.query.id! as Id, [router.query.id]);

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
    <>
     <OfferCardWrapper
      style={{ border: "none" }}>
      <OfferCard
        image={props.image}
        name={props.name}
        title={props.title}
        city={props.city}
        rate={props.rate}
        description={props.description}
        price={props.price}
        id={props.id}
        userId={props.id}
      />
      <TechnicianColumn>
        <ButtonShared onClick={onAccept}>Accept</ButtonShared>
        <ButtonShared onClick={onReject}>Reject</ButtonShared>
        <ButtonShared onClick={onComplete}>Complete</ButtonShared>
      </TechnicianColumn>
      </OfferCardWrapper>
    </>
  );
};
export default CardOfferWithButton;
