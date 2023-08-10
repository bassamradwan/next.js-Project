import AdsComponent from "@/components/AdsComponent";
import Banner from "@/components/Banners/GeneralBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const Ads = () => {
  return (
    <>
      <Navbar />
      <Banner title="Ads" subtitle="Home / Ads" $isHome={false} />
      <AdsComponent />
      <Footer />
    </>
  );
};
export default Ads;
export async function getStaticProps(context: { locale: any }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`@/messages/${context.locale}.json`)).default,
    },
  };
}
