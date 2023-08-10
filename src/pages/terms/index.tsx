import Banner from "@/components/Banners/GeneralBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TermsComponent from "@/components/Terms";
const TermsPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Terms of Service" subtitle="Home/Terms of Service" />
      <TermsComponent />
      <Footer />
    </>
  );
};
export default TermsPage;
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
