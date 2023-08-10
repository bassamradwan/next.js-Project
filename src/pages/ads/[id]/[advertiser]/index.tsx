import AdBanner from "@/components/Banners/AdBanner";
import AdvertiserContactComponent from "@/components/Advertiser";
import Navbar from "@/components/Navbar";

const AdvertiserInfo = {
  title: "Ad Title",
  city: "Ad City",
  date: "Ad Date",
  cost: "Ad Cost",
  category: "Ad Category",
  image: "/hospital1.png",
};
const AdvertiserContactPage = () => {
  return (
    <div>
      <Navbar />
      <AdBanner
        title={AdvertiserInfo.title}
        city={AdvertiserInfo.city}
        date={AdvertiserInfo.date}
        budget={AdvertiserInfo.cost}
        adBannerImage={AdvertiserInfo.image}
        category={AdvertiserInfo.category}
      />
      <AdvertiserContactComponent />
    </div>
  );
};
export default AdvertiserContactPage;
export async function getServerSideProps(context: { params: { id: any }; locale: any }) {
  const id = context.params?.id;
  console.log("id", id);
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
