import useAd from "@/hooks/useAd";
import { OfferHeading, OfferList, OfferWrapper } from "./StyledJobOffers";
import OfferCard from "./offerCard";
import { useTranslations } from "next-intl";
import useUser from "@/hooks/useUser";
import { Ad } from "@/types";

const offer = {
  image: "/technician.png",
  name: "Ahmed fouad",
  title: "Technician",
  city: "Mansoura",
  date: "12/12/2020",
  rate: 4,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  price: 1000,
};

interface jobOffersProp {
  ad: Ad | undefined;
}

const JobOffers = (props: jobOffersProp) => {
  useUser();
  const t = useTranslations("SingleAdDetailed");
  const { ad } = useAd(props?.ad?.id);

  return (
    <OfferWrapper>
      <OfferHeading>{t("jobOffers")}</OfferHeading>
      <OfferList>
        {ad?.offer?.map((offer, index) => (
          <OfferCard
            name={offer?.technical?.name}
            title={offer?.technical?.last_name}
            city={offer?.technical?.city}
            rate={offer?.technical?.rate}
            description={offer?.message} //TODO: offer.description
            image={offer?.technical?.image}
            price={offer?.price}
            key={index}
            userId={offer?.technical?.id}
            id={offer?.id}
          />
        ))}
      </OfferList>
    </OfferWrapper>
  );
};
export default JobOffers;
