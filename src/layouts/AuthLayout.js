// Library import

import NextLink from "next/link";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import styled from "@emotion/styled";
import { createTheme } from "@/theme";
import { useTheme } from "@mui/material/styles";

// local import
import { Logo } from "@/components/custom-logo/logo";
import common from "../assets/auth/common-logo.svg";
import AppName from "../assets/auth/app-name.svg";
import { AppLogo } from "@/components/custom-logo/app-logo";

// TODO: Change subtitle text

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "red",
  },
}));

const AuthLayout = (props) => {
  const { children } = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={12}
          lg={8}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            [theme.breakpoints.down("lg")]: {
              background:
                "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486)",
            },
          }}
        >
          <Box
            component="header"
            sx={{
              left: 10,
              p: 2,
              position: "fixed",
              top: 0,
              width: "100%",
              display: "flex",
              gap: "1em",
              alignItems: "center",
              // [theme.breakpoints.down('sm')]: {
              //   background: "rgb(170,176,198)"
              // },
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                // display: "flex",
                height: 32,
                width: 32,
              }}
            >
              <Logo />
            </Box>
          </Box>
          {children}
        </Grid>
        {matches && (
          <Grid
            xs={12}
            lg={4}
            sx={{
              alignItems: "center",
              background:
                "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              "& img": {
                maxWidth: "100%",
              },
            }}
          >
            <Box
              sx={{
                p: 3,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <AppLogo sx={{ fontSize: "10em" }} />

              <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
                High-quality and royalty free content shared by creators.
              </Typography>
              <Image alt="camera-image" src={common} />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AuthLayout;
