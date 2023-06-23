import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "../../components/Button";
import { Title, Wrapper } from "./styles";

export default function Dashboard() {
  const { signOut, user } = useContext(AuthContext);

  return (
    <Wrapper>
      <Title>Hello, {user.name} 👋</Title>
      <Button onPress={signOut} />
    </Wrapper>
  );
}
