import Footer from "@/components/Footer";
import AdvertiserContactComponent from "@/components/Advertiser";
import Banner from "@/components/Banners/GeneralBanner";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import Navbar from "@/components/Navbar";
import { useEffect, useMemo, useState } from "react";
import { Id, User } from "@/types";
import { DateTimeFormatOptions, useLocale } from "next-intl";
import AdBanner from "@/components/Banners/AdBanner";
import UserInfoBanner from "@/components/Banners/UserInfoBanner";

const UserInfo = {
  title: "Ad Titlexxxxxx",
  city: "Ad City",
  date: "Ad Date",
  cost: "Ad Cost",
  category: "Ad Category",
  image: "/hospital1.png",
};
const UserID = () => {
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

  const AdInfo = {
    name: user?.name,
    type:user?.type,
    address: user?.address,
    date:formatDate( user?.created_at),
    UserInfoBannerImage: user?.image,
    rate: user?.rate,
  };


  function formatDate(dateString: string) {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  }

  useEffect(() => {
    if (userId) {
      getUserById(userId).then(res => {
        setUser(res);
      });
    }
  }, [getUserById, userId]);
  
  console.log(user);

  return (
    <div>
      <Navbar/>
      <UserInfoBanner
        name={AdInfo.name}
        type={AdInfo.type}
        address={AdInfo.address}
        date={AdInfo.date}
        UserInfoBannerImage={AdInfo.UserInfoBannerImage}
        rate={AdInfo?.rate}
      />
      <AdvertiserContactComponent
      user={user} />
      <Footer />
    </div>
  );
};
export default UserID;

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
