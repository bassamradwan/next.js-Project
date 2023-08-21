import AdBanner from "@/components/Banners/AdBanner";
import AdvertiserContactComponent from "@/components/Advertiser";
import Navbar from "@/components/Navbar";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { useLocale } from "next-intl";
import { Id, User } from "@/types";

const AdvertiserInfo = {
  title: "Ad Title",
  city: "Ad City",
  date: "Ad Date",
  cost: "Ad Cost",
  category: "Ad Category",
  image: "/hospital1.png",
};

const AdvertiserContactPage = () => {

  const router = useRouter();
  const { getUserById } = useUser();
  const userId = useMemo(() => router.query.id as Id, [router.query.id]);
  const locale = useLocale();
  const [user, setUser] = useState<User>({
    about: "",
    accomplish_tasks: 0,
    address: "",
    average_cost: 0,
    birth_date: "",
    certificates: [],
    city_id: "",
    email: "",
    experiences: [],
    graduation_year: "",
    id: 0,
    image: "",
    last_name: "",
    name: "",
    phone: "",
    rate: 0,
    skills: [],
    specialization: "",
    type: "",
    university: "",
    created_at:"",
  });

  useEffect(() => {
    if (userId) {
      getUserById(userId).then(res => {
        setUser(res);
      });
    }
  }, [getUserById, userId]);

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
      <AdvertiserContactComponent user={user}/>
    </div>
  );
};
export default AdvertiserContactPage;
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
