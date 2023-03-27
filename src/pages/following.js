import FollowingLayout from "../layouts/FollowingLayout";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack mt={10} maxWidth={"lg"} spacing={10} display={"flex"}>
        <Typography variant="h1">Following</Typography>
        <Typography variant="h5">
          The latest photos from photographers you follow.
        </Typography>
        <Typography variant="body1">
          No photos to display. Follow some Frames photographers and check back
          soon.
        </Typography>
      </Stack>
    </Box>
  );
}

export default Page;

Page.getLayout = (page) => <FollowingLayout>{page}</FollowingLayout>;
