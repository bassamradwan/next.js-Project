import React from "react";
import { Avatar, Dropdown, MenuProps } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  DropDownIcon,
  UserInfo,
  UserName,
  UserType,
  UserWrapper,
} from "@/components/Navbar/StyledTopNavbar";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { clearUser } from "@/store/features/user/userSlice";
import { useRouter } from "next/router";

function UserMenu() {
  const t = useTranslations("Navigation");
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.user);
  const router = useRouter();

  const items: MenuProps["items"] = [
    {
      key: "statistics",
      label: (
        <Link className="text-light" href={`/profile/${user?.id}?tab=statistics`}>
          {t("statistics")}
        </Link>
      ),
      icon: <DropDownIcon src="/dropdown/chart.svg" alt="statistics" />,
    },
    {
      key: "changeInfo",
      label: <Link href={`/profile/${user?.id}?tab=changeInfo`}>{t("change info")}</Link>,
      icon: <DropDownIcon src="/dropdown/edit.svg" alt="change info" />,
    },
    {
      key: "myJobs",
      label: <Link href={`/profile/${user?.id}?tab=myJobs`}>{t("myJobs")}</Link>,
      icon: <DropDownIcon src="/dropdown/jobs.svg" alt="My Favourat" />,
    },
    {
      key: "myOffers",
      label: <Link href={`/profile/${user?.id}?tab=myOffers`}>{t("myOffers")}</Link>,
      icon: <DropDownIcon src="/dropdown/offers.svg" alt="My Offers" />,
    },
    {
      key: "myFavourat",
      label: <Link href={`/profile/${user?.id}?tab=favourates`}>{t("myFavorites")}</Link>,
      icon: <DropDownIcon src="/dropdown/favourates.svg" alt="favourates" />,
    },
    {
      key: "chat",
      label: <Link href={`/profile/${user?.id}?tab=chat`}>{t("messages")}</Link>,
      icon: <DropDownIcon src="/dropdown/chat.svg" alt="chat" />,
    },
    {
      key: "logout",
      label: (
        <Link
          onClick={() => {
            Cookies.remove("medtich-token");
            dispatch(clearUser());
          }}
          href="/"
        >
          {t("logout")}
        </Link>
      ),
      icon: <DropDownIcon src="/dropdown/logout.svg" alt="logout" />,
    },
  ];

  const itemsHospital: MenuProps["items"] = [
    {
      key: "addOrder",
      label: <Link href={`/profile-Hospital/${user?.id}?tab=addOrder`}>{t("addOrder")}</Link>,
      icon: <DropDownIcon src="/dropdown/element-plus.svg" alt="statistics" />,
    },
    {
      key: "myOrders",
      label: <Link href={`/profile-Hospital/${user?.id}?tab=myOrders`}>{t("myOrders")}</Link>,
      icon: <DropDownIcon src="/dropdown/document-text.svg" alt="change info" />,
    },
    {
      key: "myFavourat",
      label: <Link href={`/profile-Hospital/${user?.id}?tab=Favourat`}>{t("myFavorites")}</Link>,
      icon: <DropDownIcon src="/dropdown/favourates.svg" alt="favourates" />,
    },
    {
      key: "chat",
      label: <Link href={`/profile-Hospital/${user?.id}?tab=chat`}>{t("messages")}</Link>,
      icon: <DropDownIcon src="/dropdown/chat.svg" alt="chat" />,
    },
    {
      key: "logout",
      label: (
        <Link
          onClick={() => {
            Cookies.remove("medtich-token");
            dispatch(clearUser());
          }}
          href="/"
        >
          {t("logout")}
        </Link>
      ),
      icon: <DropDownIcon src="/dropdown/logout.svg" alt="logout" />,
    },
  ];

  if (!user) return null;

  return (
    < >
      <Dropdown
        menu={{ items: user.type === "technical" ? items : itemsHospital }}
        trigger={["click", "hover"]}
      >
        <UserInfo>
          <DownOutlined />
          <UserWrapper style={{
              margin:"5px",
          
            }}>
            <UserName>{user.name}</UserName>
            <UserType>{user.type}</UserType>
          </UserWrapper>

          <Avatar
            size={32}
            icon={<UserOutlined />}
            onClick={() => {
              if (user.type === "technical") {
                router.push(`/profile/${user.id}?tab=statistics`);
              } else {
                router.push(`/profile-Hospital/${user.id}?tab=addOrder`);
              }
            }}
            style={{
              margin:"5px",
          
            }}
          />
          
             <img src={"/sms.svg"} alt="Chat" />
             <img src={"/notification.svg"} alt="Notifications" />
        </UserInfo>
      </Dropdown>
    </>
  );
}

export default UserMenu;
