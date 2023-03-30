import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteSharp";
import DownloadIcon from "@mui/icons-material/Download";

function ImageCard({ children }) {
  return (
    <>
      <ImageListItem
        sx={{
          ".MuiImageListItemBar-root:hover": {
            opacity: 1,
            transition: "all 0.2s ease-in",
          },
          cursor: "pointer",
        }}
      >
        {children}
        <ImageListItemBar
          sx={{
            opacity: 0,
            height: "100%",
            alignItems: "flex-end",
          }}
          title={<Avatar>AR</Avatar>}
          position="bottom"
          actionIcon={
            <Box sx={{ background: "white" }}>
              <IconButton htmlColor="red" sx={{ color: "black" }}>
                <FavoriteBorderOutlinedIcon htmlColor="red" />
              </IconButton>
              <IconButton sx={{ color: "black" }} aria-label={`info about `}>
                <DownloadIcon />
              </IconButton>{" "}
            </Box>
          }
          actionPosition="right"
        />
      </ImageListItem>
    </>
  );
}

export default ImageCard;
