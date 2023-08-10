import React, { useState, useEffect, useRef } from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  BasicInfo,
  PersonAvatar,
  SubTitle,
  Title,
  ContentWrapper,
  ContainerWrapper,
  NavCard,
  ContentMobileNavRef,
  MobileNavIcon,
  NavCardMenu,
  NavCardMenuItem,
  NavCardMenuItemIcon,
  NavCardMenuItemLabel,
} from "./StyledProfile";
import {
  StatisticsComponent,
  ChangeInfoComponent,
  MyJobsComponent,
  MyOffersComponent,
  MyFavouratesComponent,
  MyChatComponent,
} from "./components";
import { useLocation } from "react-use";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { User } from "@/types";
import { useAppSelector } from "@/hooks";

const ProfileComponent = () => {
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
      statistics: "1",
      changeInfo: "2",
      myJobs: "3",
      myOffers: "4",
      favourates: "5",
      chat: "6",
      logout: "7",
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
        return <StatisticsComponent />;
      case "2":
        return <ChangeInfoComponent />;
      case "3":
        return <MyJobsComponent />;
      case "4":
        return <MyOffersComponent />;
      case "5":
        return <MyFavouratesComponent />;
      case "6":
        return <MyChatComponent />;
      case "7":
        return <div>Logout Content</div>;
      default:
        return null;
    }
  };

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Statistics",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Change Info",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "My Jobs",
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "My Offers",
    },
    {
      key: "5",
      icon: <UserOutlined />,
      label: "Favourates",
    },
    {
      key: "6",
      icon: <UserOutlined />,
      label: "Chat",
    },
    {
      key: "7",
      icon: <UserOutlined />,
      label: "Logout",
    },
  ];

  const [MobileShowStatus, setMobileShowStatus] = useState(false);

  //name User
  const user = useAppSelector((state) => state.user.user) ;

  return (
    <ContentWrapper>
      <ContainerWrapper>
        <NavCard MobileShowStatus={MobileShowStatus}>
          <BasicInfo>
            <PersonAvatar src="/technician.png" />
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

export default ProfileComponent;
