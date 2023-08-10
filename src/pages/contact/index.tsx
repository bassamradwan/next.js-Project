import Banner from "@/components/Banners/GeneralBanner";
import ContactUsComponent from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Contact Us" subtitle="We are here to help you" />
      <ContactUsComponent />
      <Footer />
    </>
  );
};
export default ContactPage;
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
