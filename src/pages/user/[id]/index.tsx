import AdBanner from "@/components/Banners/AdBanner";
import Footer from "@/components/Footer";
import AdvertiserContactComponent from "@/components/Advertiser";
import Navbar from "@/components/Navbar";

const UserInfo = {
  title: "Ad Titlexxxxxx",
  city: "Ad City",
  date: "Ad Date",
  cost: "Ad Cost",
  category: "Ad Category",
  image: "/hospital1.png",
};
const User = () => {
  return (
    <div>

      <AdvertiserContactComponent />
      <Footer />
    </div>
  );
};
export default User;

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
