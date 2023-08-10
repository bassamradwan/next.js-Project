import { Button, Divider, Menu } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/Navbar/LocaleSwitcher";
import { useRouter } from "next/router";

interface MenuItem {
  key: string;
  title: string;
  href?: string;
  subItems?: MenuItem[];
  button?: boolean;
}

interface AppMenuProps {
  isInline?: boolean;
  items: MenuItem[];
}

const MenuItemJoinUs = styled(Menu.Item)`
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 13px;
  font-weight: 500;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    background-color: #000;
    transform: scaleY(0);
    transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    exclude: button;
  }

  &:hover {
    cursor: pointer;

    &:after {
      border: none;
    }
  }

  .ant-menu-title-content:hover {
    cursor: pointer;
  }
`;
const MenuItemStaticPages = styled(Menu.Item)``;

const TopNavWrapperAppMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

const ContactEmail = styled.div``;

const LangIconSwitcher = styled.img`
  width: 20px;
  height: 20px;
  margin-inline-start: 10px;
`;
const StaticPagesSubMenu = styled(Menu.SubMenu)``;

const AppMenu = (props: AppMenuProps) => {
  const { isInline, items } = props;
  const t = useTranslations("Navigation");
  const router = useRouter();

  return (
    <>
      <Menu
        style={{
          border: "none",
        }}
        mode={isInline ? "inline" : "horizontal"}
        defaultSelectedKeys={["/"]}
      >
        <TopNavWrapperAppMenu>
          <div style={{ width: "90%", display: "flex", alignItems: "center" }}>
            <LocaleSwitcher />
            <LangIconSwitcher src="/vuesaxboldglobal.svg" alt="lang swich" />
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <IconImage src="/navemail.svg" alt="site logo" />
            <ContactEmail>ifo@medtich.com</ContactEmail>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <IconImage src="/navcall.svg" alt="site logo" />
            <ContactEmail>+201111111111</ContactEmail>
          </div>
          <Divider />
        </TopNavWrapperAppMenu>
        {items.map(item => {
          if (item.subItems) {
            return (
              <StaticPagesSubMenu key={item.key} title={item.title}>
                {item.subItems.map(subItem => (
                  <MenuItemStaticPages key={subItem.key}>
                    <Link href={subItem.href as string}>{subItem.title}</Link>
                  </MenuItemStaticPages>
                ))}
              </StaticPagesSubMenu>
            );
          } else if (item.button) {
            return (
              <MenuItemJoinUs key={item.key}>
                <Button
                  type="primary"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  {item.title}
                </Button>
              </MenuItemJoinUs>
            );
          } else {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href as string}>{item.title}</Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </>
  );
};

const Navbar = ({ isInline = false }: { isInline?: boolean }) => {
  const t = useTranslations("Navigation");
  const items = [
    {
      key: "/",
      title: `${t("home")}`,
      href: "/",
    },
    {
      key: "/ads",
      title: `${t("ads")}`,
      href: "/ads",
    },
    {
      key: "/blog",
      title: `${t("blog")}`,
      href: "/blog",
    },
    {
      key: "/pages",
      title: `${t("pages")}`,
      subItems: [
        {
          key: "pages1",
          title: `${t("helpCenter")}`,
          href: "/help",
        },
        {
          key: "pages2",
          title: `${t("contactUs")}`,
          href: "/contact",
        },
        {
          key: "pages3",
          title: `${t("aboutUs")}`,
          href: "/about",
        },
        {
          key: "pages4",
          title: `${t("termsAndConditions")}`,
          href: "/terms",
        },
      ],
    },
    {
      key: "joinUs",
      title: `${t("join-us")}`,
      button: true,
    },
  ];

  return <AppMenu isInline={isInline} items={items} />;
};

export default Navbar;
