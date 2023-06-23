import styled, { DefaultTheme, css } from "styled-components/native";

interface TextProps {
  fonts?: string;
  color?: string;
  fontSize?: string;
  theme: DefaultTheme;
}

export const Text = styled.Text`
  ${({ theme, fonts, color, fontSize, ...props }: TextProps) => css`
    font-family: ${fonts ? theme.fonts[fonts] : theme.fonts.font400};
    color: ${color ? theme.colors[color] : "#333"};
    font-size: ${fontSize ? fontSize : "24px"};
  `}
`;
