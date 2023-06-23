import React, { useState, useContext, useRef } from "react";
import { Container, Image } from "./styles";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../../contexts/AuthContext";
import { InputForm } from "../../components/Input/Input";
import { Button } from "../../components/Button";
import { TextInput, TouchableOpacity } from "react-native";
import Title from "../../components/Title/Title";

import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../App";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loadingAuth } = useContext(AuthContext);
  const passwordInputRef = useRef<TextInput | null>(null);
  const navigation = useNavigation<StackTypes>();
  async function handleLogin() {
    if (email === "" || password === "") return;

    await signIn({ email, password });
  }

  return (
    <Container>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
      >
        <Image source={require("../../../assets/mobileLogin.png")} />
        <Styled.Wrapper>
          <Title fontSize="36px" color="defaultFont">
            Login
          </Title>
        </Styled.Wrapper>

        <Styled.Form>
          <InputForm
            label="username"
            placeholder="Digite seu email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
            returnKeyType="next"
          />
          <InputForm
            label="password"
            placeholder="Digite sua senha"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            ref={passwordInputRef}
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />
          <Styled.WrapperButton>
            <Button label="Logar" onPress={handleLogin} loading={loadingAuth} />
          </Styled.WrapperButton>
        </Styled.Form>
        <Styled.Wrapper>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Title color="purple700" fontSize="16px">
              Criar conta
            </Title>
          </TouchableOpacity>
        </Styled.Wrapper>
      </KeyboardAwareScrollView>
    </Container>
  );
}
