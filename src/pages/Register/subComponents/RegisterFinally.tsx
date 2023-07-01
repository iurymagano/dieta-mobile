import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { InputForm } from "../../../components/Input/Input";
import * as Styled from "../styles";
import Toast from "react-native-toast-message";
import { dataInputFinally } from "../helpers/dataInput";
import Title from "../../../components/Title/Title";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import api from "../../../services/api";
import { calcToAgeDate } from "../../../utils/calcToAgeDate";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../../App";

interface RegisterFinallyProps {
  onChangeInputs: (value: string, type: string) => void;
  valueInputs: ValueInputs;
}

interface ValueInputs {
  [key: string]: string;
}

export default function RegisterFinally({
  onChangeInputs,
  valueInputs,
}: RegisterFinallyProps) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<StackTypes>();

  const handleSaveUser = async () => {
    const { nome, nascimento, email, peso, altura, objetivo } = valueInputs;
    const dateWithoutSlashes = nascimento.replace(/\//g, "");
    console.log(nome, nascimento, email);

    if (!Object.values(valueInputs).every((current) => current)) {
      Toast.show({
        type: "error",
        text1: "Atenção",
        text2: "É necessário preencher todos os campos",
      });
      return;
    }

    try {
      setLoading(true);
      const respUser = await api.post("/users", {
        name: nome,
        email: email,
        password: dateWithoutSlashes,
      });
      if (!respUser.data) {
        Toast.show({
          type: "error",
          text1: "Atenção",
          text2: "Email já existente",
        });
      }
      console.log(respUser.data);

      const data = {
        peso,
        altura,
        idade: objetivo,
        user_id: respUser.data.id,
      };
      console.log("teste", data);
      const respDetailsUser = await api.post("/postdata", {
        table: "detailsUser",
        data,
      });
      console.log(respDetailsUser.data);
      if (respDetailsUser.data) {
        Toast.show({
          type: "success",
          text1: "Muito bem!",
          text2: "Usuario foi criado com sucesso",
        });
      }

      setLoading(false);
      setTimeout(() => {
        navigation.navigate("SignIn");
      }, 2000);
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "Atenção",
        text2: "Email já existente",
      });
    }
  };

  return (
    <Styled.Wrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={100}
      >
        <Styled.Content>
          <Title fontSize="36px" fonts="font500" color="">
            Agora vamos falar do seu objetivo.
          </Title>
          <Styled.RegisterForm>
            {dataInputFinally.map((input) => (
              <InputForm
                key={input.label}
                placeholder={input.placeholder}
                onChangeText={(value) => onChangeInputs(value, input.input)}
                label={input.label}
                keyboardType={"numeric"}
                maxLength={4}
                value={
                  valueInputs[input.input as keyof typeof valueInputs] || ""
                }
              />
            ))}
          </Styled.RegisterForm>
          <Styled.BoxButton>
            <Button
              label="Criar conta"
              onPress={handleSaveUser}
              loading={loading}
            />
          </Styled.BoxButton>
        </Styled.Content>
      </KeyboardAwareScrollView>
      <Toast />
    </Styled.Wrapper>
  );
}
