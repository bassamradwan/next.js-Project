import AppMenu from "@/Shared/AppMenu";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import TopNavbar from "@/components/Navbar/TopNavbar";
import { useRouter } from "next/router";
import styled from "styled-components";

const MobileNavWrapper = styled.div`
  display: flex;
  background: #00c3b4;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavbarWithDrawer = () => {
  const router = useRouter();
  // get locale
  const { locale } = router;
  const [opeMenu, setOpeMenu] = useState(false);
  return (
    <>
      {/* burger Icon  Wrapper and the [BurgerIcon]*/}
      <MobileNavWrapper>
        <div style={{ height: "50px" }} className="menuIcon">
          <MenuOutlined
            style={{
              color: "white",
              fontSize: "20px",
              marginInlineStart: "20px",
              marginTop: "15px",
            }}
            onClick={() => setOpeMenu(true)}
          />
        </div>
        <div
          style={{
            background: "white",
            cursor: "pointer",
          }}
        >
          <img
            src="/websitelogo.svg"
            alt="site logo"
            style={{
              width: "100px",
              height: "50px",
              marginLeft: "20px",
              marginTop: "10px",
            }}
            // when click navigate to the home page
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
      </MobileNavWrapper>

      {/* ------------Menu in the Desktop--------------- */}
      <span className="headerMenu">
        <TopNavbar />
        <div
          style={{
            backgroundColor: "#00D9C8",
            color: "#000",
            fontSize: "13px",
            border: "none",
            margin: "0px 10%",
            padding: "25px 25px",
            borderRadius: "24px",
            background: "#FFF",
            boxShadow: "0px -8px 77px 0px rgba(194, 194, 194, 0.25)",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            zIndex: 100,
          }}
        >
          {/* site Logo */}
          <div
            style={{
              cursor: "pointer",
              flex: 1,
            }}
          >
            <img
              src="/websitelogo.svg"
              alt="site logo"
              style={{
                width: "100px",
                height: "50px",
                marginInlineStart: "20px",
                marginTop: "10px",
              }}
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
          {/* Menu */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <AppMenu />
          </div>
        </div>
      </span>
      {/*--------------- Menu in the Mobile------------- */}
      <Drawer
        placement={locale === "ar" ? "right" : "left"}
        open={opeMenu}
        onClose={() => setOpeMenu(false)}
        closable={false}
        bodyStyle={{ background: "white" }}
      >
        <TopNavbar />
        <AppMenu isInline />
      </Drawer>
    </>
  );
};
export default NavbarWithDrawer;
