import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LinkBar = () => {
  const router = useRouter();
  const { pathname } = router;

  console.log(router, "---FollowingLayout");
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        // maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1em 0",
          gap: "5em",
        }}
        direction="row"
      >
        <Button
          color="secondary"
          component={Link}
          variant={pathname == "/" ? "contained" : "text"}
          href="/"
        >
          Wall
        </Button>
        <Button
          variant={pathname == "/following" ? "contained" : "text"}
          color="secondary"
          component={Link}
          href="/following"
        >
          Following
        </Button>
      </Stack>
    </Stack>
  );
};

export default LinkBar;
