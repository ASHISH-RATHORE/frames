import BellIcon from "@heroicons/react/24/solid/BellIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { usePopover } from "../hooks/use-popover";
import AppName from "../assets/auth/app-name.svg";
import AppLogo from "../assets/auth/login.svg";
import Image from "next/image";
import { Logo } from "@/components/custom-logo/logo";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
// import { AccountPopover } from '../Navigation/account-popover';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const accountPopover = usePopover();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // border:"1px solid ",
    // borderColor:"theme.palette.primary.main",
    background: "#f7f7f7",
    // '&:hover': {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "theme.palette.primary.main",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const theme = useTheme();

  return (
    <>
      {/* <Box
        component="header"
        // sx={{ flexGrow: 1}}
      > */}
      <Box
        component="header"
        sx={{
          background: (theme) => theme.palette.background.default,
          top: 0,
          backdropFilter: "blur(6px)",
          position: "sticky",
          zIndex: (theme) => theme.zIndex.appBar,
          height: TOP_NAV_HEIGHT,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Box
              component={Link}
              href="/"
              sx={{
                height: 32,
                width: 32,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Logo />
            </Box>
            <Image src={AppName} alt="Frames" height={30} priority />
          </Stack>

          <Stack
            alignItems="center"
            justifyContent="space-around"
            direction="row"
            spacing={5}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button endIcon={<AddIcon />} disabled variant="contained">
                Upload
              </Button>
            </Box>

            <Box>
              {false ? (
                <Avatar
                  sx={{
                    cursor: "pointer",
                    height: 40,
                    width: 40,
                    background: theme.palette.background.app,
                  }}
                >
                  AR
                </Avatar>
              ) : (
                <Stack direction="row" spacing={2}>
                  <Button component={Link} href="/auth/login">
                    Log in
                  </Button>
                  <Button
                    component={Link}
                    href="/auth/register"
                    variant="contained"
                  >
                    Join
                  </Button>
                </Stack>
              )}
            </Box>
          </Stack>
        </Stack>
      </Box>
      {/* </Box> */}
    </>
  );
};
