import React, { useEffect, useRef, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  BasicInfo,
  ContainerWrapper,
  ContentMobileNavRef,
  ContentWrapper,
  MobileNavIcon,
  NavCard,
  NavCardMenu,
  NavCardMenuItem,
  NavCardMenuItemIcon,
  NavCardMenuItemLabel,
  PersonAvatar,
  SubTitle,
  Title,
} from "../Profile/StyledProfile";
import { useLocation } from "react-use";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import FavouratesComponent from "./components/FavouritesComponent";
import OrdersComponent from "./components/AddOrdersComponent";
import MyOrdesComponent from "./components/MyOrdersComponent";
import MyChatComponent from "./components/MyChatComponent";
import { User } from "@/types";

const ProfileHospitalComponent = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const contentRef = useRef(null);

  // get the tab from the url
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    // map between the components and the tabs
    const tabs: { [key: string]: string } = {
      addOrder: "1",
      myOrders: "2",
      Favourat: "3",
      chat: "4",
      logout: "5",
    };
    // if tab is not null, set the selected menu item
    if (tab) {
      setSelectedMenuItem(tabs[tab]);
    }
  }, [location]);

  useEffect(() => {
    // scroll to the middle of the page when selectedMenuItem changes
    // get an element by id and scroll to it
    const element = document.getElementById("profile-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedMenuItem]);

  const handleMenuItemClick = (menuItem: any) => {
    setSelectedMenuItem(menuItem.key);
    setCollapsed(true);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "1":
        return <OrdersComponent />;
      case "2":
        return <MyOrdesComponent />;
      case "3":
        return <FavouratesComponent />;
      case "4":
        return <MyChatComponent />;
      case "5":
        return <div>Logout Content</div>;
      default:
        return null;
    }
  };

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Add Orders",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: " My Orders",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "My Favourites",
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "Chat",
    },
    {
      key: "5",
      icon: <UserOutlined />,
      label: "Logout",
    },
  ];

  const [MobileShowStatus, setMobileShowStatus] = useState(false);

  //name User
  const user = useSelector((state: RootState) => state.user.user) as User;

  return (
    <ContentWrapper>
      <ContainerWrapper>
        <NavCard MobileShowStatus={MobileShowStatus}>
          <BasicInfo>
            <PersonAvatar src={user?.image} />
            <Title>{user?.name ?? "name"}</Title>
            <SubTitle>{user?.type}</SubTitle>
            <NavCardMenu>
              {items.map(item => (
                <NavCardMenuItem
                  key={item.key}
                  onClick={() => {
                    handleMenuItemClick(item);
                    // when click on menu item, hide the menu
                    setMobileShowStatus(false);
                  }}
                  selected={selectedMenuItem === item.key}
                >
                  <NavCardMenuItemIcon>{item.icon}</NavCardMenuItemIcon>
                  <NavCardMenuItemLabel>{item.label}</NavCardMenuItemLabel>
                </NavCardMenuItem>
              ))}
            </NavCardMenu>
          </BasicInfo>
        </NavCard>
        <ContentMobileNavRef ref={contentRef} id="profile-content">
          <MobileNavIcon src="/filter.png" onClick={() => setMobileShowStatus(!MobileShowStatus)} />
          {renderContent()}
        </ContentMobileNavRef>
      </ContainerWrapper>
    </ContentWrapper>
  );
};

export default ProfileHospitalComponent;
