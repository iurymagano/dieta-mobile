import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}

const MyTheme: DefaultTheme = {
  title: "light",
  fonts: {
    font100: "Poppins_100Thin",
    font400: "Poppins_400Regular",
    fontIta400: "Poppins_400Regular_Italic",
    font500: "Poppins_500Medium",
    font600: "Poppins_600SemiBold",
    font700: "Poppins_700Bold",
    font900: "Poppins_900Black",
  },
  colors: {
    black: "#252726",
    purple800: "#2d0d59",
    purple600: "#a979ec",
    white: "#ffffff",
    defaultFont: "#333",
  },
};

export default MyTheme;
