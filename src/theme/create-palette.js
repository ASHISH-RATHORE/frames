import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { error, indigo, info, neutral, success, warning } from "./colors";

export function createPalette() {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: common.white,
      paper: common.paper,
      black: common.black,
      app: "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486)",
      offWhite: "rgba(0,0,0,0)",
    },
    divider: "#F2F4F7",
    error,
    info,
    mode: "light",
    neutral,
    primary: indigo,
    success,
    third:
      "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486)",
    offWhite: "rgba(0,0,0,0)",
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    warning,
  };
}
