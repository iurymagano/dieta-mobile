import { Label, ButtonTouch } from "./styles";
import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  loading?: boolean;
  colorButton?: keyof StyleButton; // Define the type as a key of StyleButton
}

interface StyleButton {
  [key: string]: string; // Add an index signature to allow any string key
}

export function Button({
  label,
  loading = false,
  colorButton = "white",
  ...props
}: ButtonProps) {
  const styleButton: StyleButton = {
    roxo: "#8376F5",
    white: "#ffffff",
  };
  const color = styleButton[colorButton];
  return (
    <ButtonTouch color={color} {...props}>
      {loading ? (
        <ActivityIndicator size={25} color="#8376F5" />
      ) : (
        <Label color={color}>{label}</Label>
      )}
    </ButtonTouch>
  );
}
