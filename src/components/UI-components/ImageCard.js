import styled from "@emotion/styled";
import React from "react";

function ImageCard({ children }) {
  const Wrapper = styled("div")(({ theme }) => ({}));

  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default ImageCard;
