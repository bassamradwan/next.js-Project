import Banner from "@/components/Banners/GeneralBanner";
import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const WhoWeArePage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Who We Are" subtitle="Home/Who We Are" />
      <AboutComponent />
      <Footer />
    </>
  );
};
export default WhoWeArePage;
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
