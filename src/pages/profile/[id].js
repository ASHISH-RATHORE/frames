import CommonLayout from "@/layouts/CommonLayout";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import RoomIcon from "@mui/icons-material/Room";
import { withAuthGuard } from "@/hocs/with-auth-guard";

const Page = withAuthGuard(() => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          padding: "0 1em",
        }}
        maxWidth={"xl"}
        rowSpacing={1}
        columnSpacing={1}
        container
        mt={5}
      >
        <Grid
          sx={{
            background:
              "linear-gradient(90deg, rgba(241,242,198,1) 4%, rgba(184,224,228,1) 58%, rgba(216,197,233,1) 89%)",
          }}
          sm={12}
          p={2}
          item
        >
          <Stack
            spacing={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
          >
            <Avatar
              sx={{
                width: 120,
                height: 120,
                background: "white",
                color: "black",
              }}
            >
              AR
            </Avatar>
            <Typography variant="h5">Ashish Rathore</Typography>
            <Stack direction={"row"} spacing={2}>
              <Button variant="outlined">Follow</Button>
              <Button variant="outlined">Message</Button>
              <Button variant="outlined">Hire</Button>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent="center"
              spacing={1}
              direction="row"
            >
              <SvgIcon component={RoomIcon} />
              <Typography variant="body2">India</Typography>
            </Stack>

            <Typography variant="body2">
              Athletic Photographer for the University of Alabama and Adobe
              Ambassador Get free Adobe Creative Cloud with the link in my bio
            </Typography>
            <Box>
              <Typography variant="body1" color={"secondary"}>
                Connect with Ashish
              </Typography>
              <Stack
                alignItems=" center"
                justifyContent="center"
                direction={"row"}
                spacing={2}
                mt={2}
              >
                <SvgIcon>
                  <InstagramIcon htmlColor="blue" />
                </SvgIcon>
                <SvgIcon>
                  <FacebookIcon htmlColor="blue" />
                </SvgIcon>
              </Stack>
            </Box>
          </Stack>
        </Grid>

        <Grid lg={12} item>
          <Stack spacing={3} direction="row">
            <Button>Photos</Button>
            <Button>Likes</Button>
          </Stack>
          <Divider sx={{ borderColor: "black" }} />
          <Grid rowSpacing={1} columnSpacing={1} p={2} container>
            {itemData.map((item, key) => (
              <Grid key={key} lg={3} md={4} sm={6} xs={12} item>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  width={"100%"}
                  height={"280px"}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
});

export default Page;

Page.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
