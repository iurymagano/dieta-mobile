import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
  color: #a4a4a4;
`;

export const Input = styled.TextInput`
  height: 55px;
  padding: 10px 20px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  background-color: #8376f5;
  &::placeholder {
    color: #ffffff;
  }
`;
