import { useParams } from "next/navigation";
import Banner from "@/components/Banners/GeneralBanner";
import Footer from "@/components/Footer";
import ProfileComponent from "@/components/Profile";
import Navbar from "@/components/Navbar";

const ProfilePage = () => {
  // get the location object from the router

  return (
    <>
      <Navbar />
      <Banner title="Profile" subtitle="Home/Profile" />
      <ProfileComponent />
      <Footer />
    </>
  );
};
export default ProfilePage;

export async function getServerSideProps(context: { params: { id: any }; locale: any }) {
  const id = context.params?.id;
  const locale = context.locale;
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