import Banner from "@/components/Banners/GeneralBanner";
import Navbar from "@/components/Navbar";
import RegisterComponent from "@/components/Register";
import { useTranslations } from "next-intl";

const Register = () => {
  // translation
  const t = useTranslations("Register");
  return (
    <div>
      <Navbar />
      <Banner title={t("title")} subtitle={t("subtitle")} />
      <RegisterComponent />
    </div>
  );
};
export default Register;
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
