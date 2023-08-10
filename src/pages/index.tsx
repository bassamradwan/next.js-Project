import React from "react";
import AdsBrowse from "@/components/AdsBrowse";
import CategoriesBrowse from "@/components/CategoriesBrowse";
import Technicians from "@/components/Technicians";
import WhyChooseUs from "@/components/WhyChooseUs";
import Complaints from "@/components/Complaints";
import Blog from "@/components/HomeBlog";
import Footer from "@/components/Footer";
import Banner from "@/components/Banners/GeneralBanner";
import Navbar from "@/components/Navbar";
import { useLocale, useTranslations } from "next-intl";
import { useSettings } from "@/hooks/useSettings";
import useUser from "@/hooks/useUser";

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const { settings } = useSettings();
  const { loading } = useUser();
  const bannerSettings = settings?.banner;
  const [keyWord, setKeyWord] = React.useState("");
  const handleSetKeyWord = (value: string) => {
    setKeyWord(value);
  };

  return (
    <>
      <Navbar />
      <Banner
        title={bannerSettings?.title[locale]}
        subtitle={bannerSettings?.description[locale]}
        $isHome={true}
        $bannerImage={bannerSettings?.image_path}
        keyWord={keyWord}
        setKeyWord={handleSetKeyWord}
      />
      <CategoriesBrowse />
      <AdsBrowse />
      <WhyChooseUs />
      <Technicians keyWord={keyWord} setKeyWord={handleSetKeyWord} />
      <Complaints />
      <Blog />
      <Footer />
    </>
  );
}

export async function getStaticProps(context: { locale: any }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`@/messages/${context.locale || "en"}.json`)).default,
    },
  };
}
