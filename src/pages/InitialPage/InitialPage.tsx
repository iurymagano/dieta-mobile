import { Image, TouchableOpacity } from "react-native";
import Title from "../../components/Title/Title";
import * as Styled from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../App";

export default function InitialPage() {
  const navigation = useNavigation<StackTypes>();

  return (
    <Styled.Wrapper>
      <Title fontSize="46px" fonts="font600">
        Bem vindo ao{" "}
        <Title fontSize="46px" color="purple700" fonts="font600">
          dietapp
        </Title>
      </Title>

      <Styled.Presentation>
        <Title fontSize="20px" fonts="font600">
          Alcance seus objetivos e metas de forma inspiradora com o nosso app de
          dieta!
        </Title>
      </Styled.Presentation>
      <Image
        source={require("../../../assets/ImageDiet.png")}
        style={{ width: "100%", height: 250 }}
        resizeMode="cover"
      />
      <Styled.Footer>
        <Button
          label="Comece agora"
          onPress={() => navigation.navigate("Register")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Title fontSize="16px" fonts="font400">
            Já possuo conta e gostaria de fazer{" "}
            <Title fontSize="16px" fonts="font600" color="purple600">
              login
            </Title>{" "}
            no aplicativo.
          </Title>
        </TouchableOpacity>
      </Styled.Footer>
    </Styled.Wrapper>
  );
}
