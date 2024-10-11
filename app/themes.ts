import { ThemeConfig } from "antd";
import { Poppins, Urbanist } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const urbanist = Urbanist({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#141718",
    colorBgElevated: "#F7F7F8",
    fontFamily: urbanist.style.fontFamily,
  },
  components: {
    Typography: {
      fontFamily: poppins.style.fontFamily,
      fontWeightStrong: 500,
    },
    Button: {
      defaultBg: "#FAFAFA",
      defaultBorderColor: "#CCCCCC",
      defaultColor: "#616161",
      defaultShadow: "5.92px 11.84px 23.68px 0px rgba(211, 209, 216, 0.3)",
    },
    Input: {
      borderRadius: 7,
      colorBorder: "#E1E1E1",
      fontSize: 16,
    },
    Card: {
      borderRadius: 16,
    },
  },
};

const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#141718",
    colorBgElevated: "#232627",
    fontFamily: urbanist.style.fontFamily,
  },
  components: {
    Typography: {
      fontFamily: poppins.style.fontFamily,
      fontWeightStrong: 500,
      
    },
    Button: {
      defaultBg: "#232627",
      defaultBorderColor: "#676767",
      defaultColor: "#A0A0A5",
      defaultShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
    },
    Input: {
      borderRadius: 7,
      colorBorder: "#E1E1E1",
      fontSize: 16,
    },
    Card: {
      borderRadius: 16,
    },
  },
};

export function getTheme(theme: "light" | "dark") {
  return theme === "light" ? lightTheme : darkTheme;
};
