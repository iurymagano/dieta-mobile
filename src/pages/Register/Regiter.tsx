import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/Input/Input";
import * as Styled from "./styles";
import { dataInput } from "./helpers/dataInput";
import { BackHandler } from "react-native";

export default function Register() {
  const [valueInputs, setValueInputs] = useState<{ [key: string]: string }>({});
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const inputs = dataInput;
  const input = inputs[selectedPage].input;
  const valueInput = valueInputs[input] || "";

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, [selectedPage]);

  const onChangeInputs = (value: string) => {
    setValueInputs((prev) => ({
      ...prev,
      [input]: value,
    }));
  };

  const handleBackPress = () => {
    if (selectedPage !== 0) {
      setSelectedPage((prev) => prev - 1);
      return true;
    }
    return false;
  };

  const handleClickNext = () => {
    if (selectedPage + 1 < inputs.length) {
      setSelectedPage((prev) => prev + 1);
    }
  };
  console.log(valueInputs);
  return (
    <Styled.Wrapper>
      <Styled.Image source={require("../../../assets/dietWalter.png")} />
      <Styled.Form>
        <Styled.BoxInput>
          <Styled.Title>{inputs[selectedPage].label}</Styled.Title>

          <InputForm
            placeholder={inputs[selectedPage].placeholder}
            onChangeText={onChangeInputs}
            value={valueInput}
          />
        </Styled.BoxInput>

        <Button label="Avançar" onPress={handleClickNext} />
      </Styled.Form>
    </Styled.Wrapper>
  );
}
