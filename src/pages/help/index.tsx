import Banner from "@/components/Banners/GeneralBanner";
import HelpCenterComponent from "@/components/HelpCenter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const HelpCenterPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Help Center" subtitle="Home/Help Center" />
      <HelpCenterComponent />
      <Footer />
    </>
  );
};
export default HelpCenterPage;
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
