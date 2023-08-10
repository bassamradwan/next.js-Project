import { Ad } from "@/hooks/useAd";
import { OfferHeading, OfferList, OfferWrapper } from "./StyledJobOffers";
import OfferCard from "./offerCard";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("SingleAdDetailed");
  return (
    <OfferWrapper>
      <OfferHeading>{t("jobOffers")}</OfferHeading>
      <OfferList>
        {/* {[1, 2, 3].map((item, index) => (
          <OfferCard {...offer} key={index} />
        ))} */}
        {props?.ad?.offer?.map((offer, index) => (
          <OfferCard
            name={offer?.technical?.name}
            title={offer?.technical?.last_name}
            city={offer?.technical?.city}
            date="12/12/2020" //TODO: offer.date
            rate={offer?.technical?.rate}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." //TODO: offer.description
            image={offer?.technical?.image}
            price={offer?.technical?.average_cost}
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
