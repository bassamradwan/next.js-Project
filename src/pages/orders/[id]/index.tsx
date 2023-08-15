import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import useAd from "@/hooks/useAd";
import { useLocale } from "next-intl";
import AdBanner from "@/components/Banners/AdBanner";
import OfferCard from "@/components/SingleAdDetailedComponent/offerCard";
import MyButtonComponent from "@/components/ButtonComponent";
import { OfferCardWrapper, TechnicianColumn } from "@/components/SingleAdDetailedComponent/StyledOfferCard";
import { TechnicianWrapper } from "@/components/TechnicianDetailedInfo/StyledTechnicianDetailedInfo";
import CardOfferWithButton from "@/components/CardOfferWhisButton";
const OrderPage = () => {


  // get the location object from the router
  const router = useRouter();
  const { id: adID } = router.query;
  // get the ad with the id from the hook
  const { ad } = useAd(adID);
  const locale = useLocale();

  const AdInfo = {
    title: ad?.name,
    city: ad?.city[locale],
    date: "Ad Date",
    cost: ad?.expected_cost,
    category: ad?.category[locale],
    image: ad?.image,
    currency: ad?.currency_code,
  };

  const offers = ad?.offer;
  const adOffers = offers
  ? offers.map((offer: any) => ({
      image: offer.technical?.image,
      name: offer.technical?.name,
      title: offer.message,
      city: offer.technical.city,
      date: "Date",
      rate: offer.technical?.rate,
      description: offer.description,
      price: offer.price,
      id: offer.id,
      userId: offer.technical.id,
      
    }))
  : [];

  return (
    <>
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
      <div>
      {adOffers && adOffers.map((offer, index) => (
        <CardOfferWithButton
          key={index}
          image={offer.image}
          name={offer.name}
          title={offer.title}
          city={offer.city}
          date={offer.date}
          rate={offer.rate}
          description={offer.description}
          price={offer.price}
          id={offer.id}
          userId={offer.id}
        />
      ))}
      </div>
      {/* <MyButtonComponent title={"spaner"}/> */}
      <Footer />
    </>
  );
};
export default OrderPage;
