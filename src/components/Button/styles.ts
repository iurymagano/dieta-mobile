import styled from "styled-components/native";

export const ButtonTouch = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 15px 0;
  background: ${({ color }: { color: string }) => color as any};
  border: 2px solid
    ${({ color }: { color: string }) =>
      (color as any) == "#ffffff" ? "#8376f5" : "#ffffff"};
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: ${({ color }: { color: string }) =>
    (color as any) == "#ffffff" ? "#8376f5" : "#ffffff"};
`;
