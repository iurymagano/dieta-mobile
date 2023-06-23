import React from "react";

import { ThemeProvider } from "styled-components/native";

import theme from "../themes";

type Props = {
  children: React.ReactNode;
};

export function Theme({ children }: Props) {
  return <ThemeProvider theme={theme.light}>{children}</ThemeProvider>;
}
