import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import not from "../assets/not-found.svg";

const Page = () => {
  const Wrapper = styled("div")(({ theme }) => ({
    background:
      "linear-gradient(to right top, #6f6372, #e6ebff, #e7fcff, #00BF98, #36C486)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minWidth:"100%",
    padding:"100px"
  }));

  return (
    <>
      <Wrapper>
        <Stack direction={"column"}>
          <Image src={not} alt="page not found" />
          <Typography variant="h3" color="info">
            Oops, you've lost in space
          </Typography>
          <Box>
          <Button size="medium"  sx={{ mt: 3 }} type="submit" variant="contained" LinkComponent={Link} href="/">
            Back to home
          </Button>
          </Box>
        </Stack>
      </Wrapper>
    </>
  );
};
export default Page;
