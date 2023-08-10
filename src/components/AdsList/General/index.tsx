import { Ad } from "@/hooks/useAds";
import AdsCardComponent from "./AdsCardComponent";
import { AdsContainer } from "./StyledGeneralAds";
import { useLocale } from "next-intl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { log } from "console";

interface AdsListComponentProps {
  $columnsCount?: number;
  favourate?: boolean;
  ads?: Ad[];
}

const AdsListComponent = (props: AdsListComponentProps) => {
  const columnsCount = props.$columnsCount ?? 2; // number of columns in the grid view of the ads list default is 2

  const locale = useLocale();

  const Ads = props.ads?.map(ad => ({
    id: ad.id,
    title: ad.name,
    category: ad?.category?.[locale] || "",
    location: ad.city[locale],
    time: ad.expected_hours,
    price: ad.expected_cost,
    applicant: ad.offer_count,
    image: ad.image,
    currency_code: ad.currency_code,
  }));
  console.log(Ads)
  return (
    <AdsContainer $columnsCount={columnsCount}>
      {Ads?.map(item => {
        return (
          <AdsCardComponent
            key={item?.id}
            id={item?.id}
            title={item?.title}
            category={item?.category}
            location={item?.location}
            time={item?.time}
            price={item?.price}
            applicant={item?.applicant}
            image={item?.image}
            favourate={props?.favourate}
            currency_code={item?.currency_code}
          />
        );
      })}
    </AdsContainer>
  );
};
export default AdsListComponent;
