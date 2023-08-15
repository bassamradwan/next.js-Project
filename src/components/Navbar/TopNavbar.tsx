import { Divider, Menu } from "antd";
import {
  ContactEmailWrapper,
  ContactPhoneWrapper,
  DropDownIcon,
  EmailSvg,
  IconLinkWrapper,
  LangLogo,
  LangWrapper,
  NavLeft,
  NavRight,
  NavWrapper,
  PhoneSvg,
  RegisterSvg,
} from "./StyledTopNavbar";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { clearUser } from "@/store/features/user/userSlice";
import Cookies from "js-cookie";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks";
import UserMenu from "@/components/UserMenu";
import { useSettings } from '@/hooks/useSettings';

const TopNavbar = () => {
  const t = useTranslations("Navigation");
  const router = useRouter();
  const user = useAppSelector(state => state.user.user);
  const isAuthenticated = Boolean(user);
  const dispatch = useAppDispatch();
 const { settings } = useSettings();

const contactUs = settings?.contacts;
console.log(contactUs); 

  function CheckUser() {
    if (user?.type == "technical") {
      return (
        <Menu>
          <Menu.Item
            key="statistics"
            onClick={() => {
              router.push(`/profile/${user?.id}?tab=statistics`);
            }}
          >
            <IconLinkWrapper>
              {/* link to profile page and statistic in the query */}
              <DropDownIcon src="/dropdown/chart.svg" alt="statistics" />
              <Link href={`/profile/${user?.id}?tab=statistics`}>{t("statistics")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="changeInfo"
            onClick={() => {
              router.push(`/profile/${user?.id}?tab=changeInfo`);
            }}
          >
            <IconLinkWrapper>
              <DropDownIcon src="/dropdown/edit.svg" alt="change info" />
              {/* link to profile page and changeInfo in the query */}
              <Link href={`/profile/${user?.id}?tab=changeInfo`}>{t("change info")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="myJobs"
            onClick={() => {
              router.push(`/profile/${user?.id}?tab=myJobs`);
            }}
          >
            <IconLinkWrapper>
              <DropDownIcon src="/dropdown/jobs.svg" alt="My Favourat" />
              {/* link to profile page and myJobs in the query */}
              <Link href={`/profile/${user?.id}?tab=myJobs`}>{t("myJobs")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="myOffers"
            onClick={() => {
              router.push(`/profile/${user?.id}?tab=myOffers`);
            }}
          >
            <IconLinkWrapper>
              <DropDownIcon src="/dropdown/offers.svg" alt="my offers" />
              {/* link to profile page and myOffers in the query */}
              <Link href={`/profile/${user?.id}?tab=myOffers`}>{t("myOffers")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="favourates"
            onClick={() => {
              router.push(`/profile/${user?.id}?tab=favourates`);
            }}
          >
            <IconLinkWrapper>
              <DropDownIcon src="/dropdown/favourates.svg" alt="favourates" />
              <Link href={`/profile/${user?.id}?tab=favourates`}>{t("myFavorites")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="chat"
            onClick={() => {
              router.push(`/profile/${user?.id}?tab=chat`);
            }}
          >
            <IconLinkWrapper>
              <DropDownIcon src="/dropdown/chat.svg" alt="chat" />
              <Link href={`/profile/${user?.id}?tab=chat`}>{t("messages")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="logout"
            onClick={() => {
              // js-cookies remove token [medtich-token] from cookies
              Cookies.remove("medtich-token");
              // remove user from redux store
              dispatch(clearUser());
              // redirect to home page
              router.push("/");
            }}
          >
            <div
              onClick={() => {
                // js-cookies remove token [medtich-token] from cookies
                Cookies.remove("medtich-token");
                // remove user from redux store
                dispatch(clearUser());
                // redirect to home page
                router.push("/");
              }}
            >
              <IconLinkWrapper>
                <DropDownIcon src="/dropdown/logout.svg" alt="logout" />
                {t("logout")}
              </IconLinkWrapper>
            </div>
          </Menu.Item>
        </Menu>
      );
    } else {
      return (
        <Menu>
          <Menu.Item
            key="addOrder"
            onClick={() => {
              router.push(`/profile-Hospital/${user?.id}?tab=addOrder`);
            }}
          >
            <IconLinkWrapper>
              {/* link to profile-Hospital page and statistic in the query */}
              <DropDownIcon src="/dropdown/chart.svg" alt="Add Order" />
              <Link href={`/profile-Hospital/${user?.id}?tab=addOrder`}>{t("addOrder")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="myOrders"
            onClick={() => {
              router.push(`/profile-Hospital/${user?.id}?tab=myOrders`);
            }}
          >
            <IconLinkWrapper>
              <DropDownIcon src="/dropdown/edit.svg" alt="My Orders" />
              {/* link to profile-Hospital page and myOrders in the query */}
              <Link href={`/profile-Hospital/${user?.id}?tab=myOrders`}>{t("myOrders")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item key="Favourat">
            <IconLinkWrapper>
              <DropDownIcon src="/dropdown/jobs.svg" alt="My Favourat" />
              {/* link to profile-Hospital page and Favourat in the query */}
              <Link href={`/profile-Hospital/${user?.id}?tab=Favourat`}>{t("myFavorites")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="chat"
            onClick={() => {
              router.push(`/profile-Hospital/${user?.id}?tab=chat`);
            }}
          >
            <IconLinkWrapper>
              <DropDownIcon src="/dropdown/offers.svg" alt="my chat" />
              {/* link to profile-Hospital page and chat in the query */}
              <Link href={`/profile-Hospital/${user?.id}?tab=chat`}>{t("messages")}</Link>
            </IconLinkWrapper>
          </Menu.Item>
          <Divider style={{ margin: "5px 0" }} />
          <Menu.Item
            key="logout"
            onClick={() => {
              // js-cookies remove token [medtich-token] from cookies
              Cookies.remove("medtich-token");
              // remove user from redux store
              dispatch(clearUser());
              // redirect to home page
              router.push("/");
            }}
          >
            <div
              onClick={() => {
                // js-cookies remove token [medtich-token] from cookies
                Cookies.remove("medtich-token");
                // remove user from redux store
                dispatch(clearUser());
                // redirect to home page
                router.push("/");
              }}
            >
              <IconLinkWrapper>
                <DropDownIcon src="/dropdown/logout.svg" alt="logout" />
                {t("logout")}
              </IconLinkWrapper>
            </div>
          </Menu.Item>
        </Menu>
      );
    }
  }

  const menu = CheckUser();

  return (
    <NavWrapper dir="ltr">
      <NavLeft>
        {isAuthenticated ? (
          <UserMenu />
        ) : (
          <div
            onClick={() => {
              router.push("/register");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: "10px",
            }}
          >
              {t("register")}
            {/* <RegisterSvg alt="" src="/frame-87.svg" /> */}
          </div>
        )}
        <img src={"/sms.svg"} alt="Chat" />
        <img src={"/notification.svg"} alt="Notifications" />
      </NavLeft>
      <NavRight>
        <LangWrapper>
          <LocaleSwitcher />
          <LangLogo src="/vuesaxboldglobal.svg" />
        </LangWrapper>
        <ContactEmailWrapper>
        info@medtich.com
        {/* {contactUs?.email} */}
          <EmailSvg src="/navemail.svg" />
        </ContactEmailWrapper>
        <ContactPhoneWrapper>
        {contactUs?.phone}
          <PhoneSvg src="/navcall.svg" />
        </ContactPhoneWrapper>
      </NavRight>
    </NavWrapper>
  );
};

export default TopNavbar;
