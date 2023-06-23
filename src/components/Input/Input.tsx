import { Label, Wrapper, Input } from "./styles";
import React, { forwardRef, ForwardedRef } from "react";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  inputRef?: ForwardedRef<TextInput> | null;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad";
}

export const InputForm = forwardRef<TextInput, InputProps>(
  ({ label, returnKeyType, keyboardType, ...props }, ref) => {
    return (
      <Wrapper>
        <Label>{label}</Label>
        <Input
          placeholderTextColor="#ccc"
          {...props}
          ref={ref}
          returnKeyType={returnKeyType}
          autoCapitalize="none"
          keyboardType={keyboardType}
          autofill
        />
      </Wrapper>
    );
  }
);
