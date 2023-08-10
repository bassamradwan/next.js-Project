import Banner from "@/components/Banners/GeneralBanner";
import Footer from "@/components/Footer";
import FAQsComponent from "@/components/Faqs";
import Navbar from "@/components/Navbar";

const FaqsPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="FAQs" subtitle="Frequently Asked Questions" />
      <FAQsComponent />
      <Footer />
    </>
  );
};
export default FaqsPage;
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
