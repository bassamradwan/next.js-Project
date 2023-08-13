// TODO: for now i will hardcode some info for each ad
// like title,city,date,cost

import AdBanner from "@/components/Banners/AdBanner";
import Navbar from "@/components/Navbar";
import SingleAdDetailedComponent from "@/components/SingleAdDetailedComponent";
import useAd from "@/hooks/useAd";
import { useLocale } from "next-intl";
import { useRouter } from "next/router";

// these info will be fetched from the database later  and populated in the page banner
// const AdInfo = {
//   title: "Ad Title",
//   city: "Ad City",
//   date: "Ad Date",
//   cost: "Ad Cost",
//   category: "Ad Category",
//   image: "/hospital1.png",
// };

const SingleAdPage = () => {
  // get the id of the ad from the url
  const router = useRouter();
  const { id: adID } = router.query;
  // get the ad with the id from the hook
  const { ad } = useAd(adID);
  const locale = useLocale();
  const AdInfo = {
    title: ad?.name,
    city: ad?.city[locale],
    date: "Ad Date", // TODO: ad.date
    cost: ad?.expected_cost,
    category: ad?.category[locale],
    image: ad?.image,
    currency: ad?.currency_code,
  };

  return (
    <div>
      <Navbar />
      <AdBanner
        title={AdInfo.title}
        city={AdInfo.city}
        date={AdInfo.date}
        budget={AdInfo.cost}
        adBannerImage={AdInfo.image}
        category={AdInfo.category}
        currency={AdInfo.currency}
      />
      <SingleAdDetailedComponent ad={ad} />
    </div>
  );
};
export default SingleAdPage;
export async function getServerSideProps(context: { params: { id: any }; locale: any }) {
  const id = context.params?.id;
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`@/messages/${context.locale}.json`)).default,
      id,
    },
  };
}
