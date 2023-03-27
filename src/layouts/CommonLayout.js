import LinkBar from "../Navigation/link-bar";
import { TopNav } from "@/Navigation/top-nav";
import React from "react";
import styled from "@emotion/styled";

const CommonLayout = ({ children }) => {
  const LayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",

    //   [theme.breakpoints.up('lg')]: {
    //     paddingLeft: SIDE_NAV_WIDTH
    //   }
  }));

  const LayoutContainer = styled("div")({
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%",
  });
  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
    </>
  );
};

export default CommonLayout;
