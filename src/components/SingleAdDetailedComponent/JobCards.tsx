import { Ad } from "@/hooks/useAd";
import {
  AdCardsWrapper,
  SummaryCard,
  BudgetRange,
  Variation,
  Divider,
  ApplyButton,
  AdvertiserCard,
  AdvertiserHeader,
  AdvertiserInfo,
  AdvertiserImage,
  TitleSubtitleWrapper,
  AdvertiserTitle,
  AdvertiserSubtitle,
  AdvertiserMetaInfo,
  MetaInfoItem,
  MetaInfoItemTitle,
  MetaInfoItemValue,
  ContactButton,
} from "./StyledSingleAdDetailed";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/router";
interface JobCardProps {
  ad: Ad | undefined;
}
const JobCards = (props: JobCardProps) => {
  const t = useTranslations("SingleAdDetailed");
  const locale = useLocale();
  const router = useRouter();
  return (
    <AdCardsWrapper>
      {/* Price Range,price Variation,Apply Button */}
      <SummaryCard>
        <BudgetRange>
          {props?.ad?.expected_cost}
          {props?.ad?.currency_code}
        </BudgetRange>
        <Variation>Fixed Price</Variation>
        <Divider />
        <ApplyButton
          onClick={() => {
            // scroll to the form offerForm
            const offerForm = document.getElementById("offerForm");
            offerForm?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Apply
        </ApplyButton>
      </SummaryCard>
      {/* Advertiser Info [Header],[section with image , title and subtitle],[three columns for meta info] */}
      <AdvertiserCard>
        <AdvertiserHeader>{props?.ad?.hospital?.name}</AdvertiserHeader>
        <AdvertiserInfo>
          <AdvertiserImage src="/hospital1.png" />
          <TitleSubtitleWrapper>
            <AdvertiserTitle>{props?.ad?.hospital?.name}</AdvertiserTitle>
            <AdvertiserSubtitle>{props?.ad?.hospital?.last_name}</AdvertiserSubtitle>
          </TitleSubtitleWrapper>
        </AdvertiserInfo>
        <Divider />
        {/* Meta like City-> Mansoura,Projects->250 project,Category->all */}
        <AdvertiserMetaInfo>
          <MetaInfoItem>
            <MetaInfoItemTitle>{t("city")}</MetaInfoItemTitle>
            <MetaInfoItemValue>{props?.ad?.city[locale]}</MetaInfoItemValue>
          </MetaInfoItem>
          <MetaInfoItem>
            <MetaInfoItemTitle>{t("Projects")}</MetaInfoItemTitle>
            <MetaInfoItemValue>{props?.ad?.hospital?.accomplish_tasks}</MetaInfoItemValue>
          </MetaInfoItem>
          <MetaInfoItem>
            <MetaInfoItemTitle>{t("category")}</MetaInfoItemTitle>
            <MetaInfoItemValue>{props?.ad?.category[locale]}</MetaInfoItemValue>
          </MetaInfoItem>
        </AdvertiserMetaInfo>
        <ContactButton
          onClick={() => {
            // navigate to the contact page with the advertiser info
            // ads/1/[advertiser]
            router.push(`/ads/${props?.ad?.id}/${props?.ad?.hospital?.id}`);
          }}
        >
          Contact
        </ContactButton>
      </AdvertiserCard>
    </AdCardsWrapper>
  );
};
export default JobCards;
