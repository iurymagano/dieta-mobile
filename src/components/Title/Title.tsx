import * as Styled from "./styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  fontSize?: string;
  color?: string;
  fonts?: string;
}

export default function Title({ children, fontSize, color, fonts }: Props) {
  const propriedades = {
    fontSize,
    color,
    fonts,
  };
  return <Styled.Text {...propriedades}>{children}</Styled.Text>;
}
