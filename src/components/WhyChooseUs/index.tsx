import { useLocale, useTranslations } from "next-intl";
import { Heading, HeadingWrapper, SubHeading, Wrapper } from "./StyledWhyChooseUs";

import {
  StatisticsItem,
  StatisticsNumber,
  StatisticsText,
  StatisticsWrapper,
  StatisticsItemIcon,
} from "./StyledWhyChooseUs";
import { useSettings } from "@/hooks/useSettings";

const WhyChooseUs = () => {
  const t = useTranslations("Home");
  const { settings } = useSettings();
  const locale = useLocale();

  const Statistics = [
    {
      icon: settings?.statistics?.total_technicians?.icon,
      number: settings?.statistics.total_technicians?.count,
      text: settings?.statistics.total_technicians?.title[locale],
    },
    {
      icon: settings?.statistics?.positive_ratings?.icon,
      number: settings?.statistics?.positive_ratings?.count,
      text: settings?.statistics?.positive_ratings?.title[locale],
    },
    {
      icon: settings?.statistics?.job_applications?.icon,
      number: settings?.statistics?.job_applications?.count,
      text: settings?.statistics?.job_applications?.title[locale],
    },
    {
      icon: settings?.statistics?.finished_projects?.icon,
      number: settings?.statistics?.finished_projects?.count,
      text: settings?.statistics?.finished_projects?.title[locale],
    },
  ];

  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading>{t("whyChooseMedtich")}</Heading>
        <SubHeading>{t("medtichNumbers")}</SubHeading>
      </HeadingWrapper>
      <StatisticsWrapper>
        {Statistics.map((item, index) => (
          <StatisticsItem key={index}>
            <StatisticsItemIcon src={`${item.icon}`} />
            <StatisticsNumber>{item.number}</StatisticsNumber>
            <StatisticsText>{item.text}</StatisticsText>
          </StatisticsItem>
        ))}
      </StatisticsWrapper>
    </Wrapper>
  );
};
export default WhyChooseUs;
