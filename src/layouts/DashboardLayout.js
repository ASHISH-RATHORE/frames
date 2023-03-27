import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
// import { SideNav } from '../Navigation/side-nav';
import { TopNav } from "../Navigation/top-nav";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import LinkBar from "../Navigation/link-bar";

const SIDE_NAV_WIDTH = 280;

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

export const DashboardLayout = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(true);

  useEffect(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [pathname, openNav]);

  const BannerLayout = () => {
    return (
      <Box
        sx={{
          display: "flex",
          backgroundColor: "grey",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
          height: "25em",
          padding: "0 1em",
          backgroundImage: `url(https://images.pexels.com/photos/2043739/pexels-photo-2043739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: 35,
              md: 30,
              sm: 25,
              xs: 18,
            },
          }}
          color={"background.default"}
        >
          The best free stock photos and royalty free images shared by creators.
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      {/* <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      /> */}{" "}
      <BannerLayout />
      <LinkBar />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
    </>
  );
};
