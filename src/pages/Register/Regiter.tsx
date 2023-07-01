import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/Input/Input";
import * as Styled from "./styles";
import { dataInput } from "./helpers/dataInput";
import { BackHandler, Pressable, Platform } from "react-native";
import Toast from "react-native-toast-message";
import { validateEmail } from "../../utils/validationUtils";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import RegisterFinally from "./subComponents/RegisterFinally";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
  const [valueInputs, setValueInputs] = useState<{ [key: string]: string }>({});
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const inputs = dataInput;
  let input = inputs[selectedPage].input;
  const valueInput = valueInputs[input] || "";
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [registerFinnally, setRegisterFinnally] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, [selectedPage, registerFinnally]);

  const onChangeInputs = (value: string, type?: string) => {
    if (type) {
      input = type;
    }

    setValueInputs((prev) => ({
      ...prev,
      [input]: value,
    }));
  };

  const onChangeDate = (event?: any, selectedDate?: Date) => {
    if (event.type === "set") {
      const currentDate = selectedDate || date;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        const dateFormat = moment(currentDate).format("DD/MM/YYYY");
        setValueInputs((prev) => ({
          ...prev,
          nascimento: dateFormat,
        }));
      }
    } else {
      toggleDatePicker();
    }
  };

  const handleBackPress = () => {
    if (registerFinnally) {
      setRegisterFinnally(false);
      return true;
    }

    if (selectedPage !== 0) {
      setSelectedPage((prev) => prev - 1);
      return true;
    }
    return false;
  };

  const handleClickNext = () => {
    let validation = { message: "", isValid: true };

    if (!valueInput)
      validation = {
        message: "É necessário preencher o campo. 👋",
        isValid: false,
      };

    if (valueInput && input === "email")
      validation = {
        message: "Email é inválido.",
        isValid: validateEmail(valueInput),
      };

    if (!validation.isValid) {
      Toast.show({
        type: "error",
        text1: "Atenção",
        text2: validation.message,
      });
      return;
    }
    if (selectedPage + 1 < inputs.length) {
      setSelectedPage((prev) => prev + 1);
    } else {
      setRegisterFinnally(true);
    }
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <Styled.Wrapper>
      {registerFinnally ? (
        <RegisterFinally
          onChangeInputs={onChangeInputs}
          valueInputs={valueInputs}
        />
      ) : (
        <>
          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraScrollHeight={100}
          >
            <Styled.Image source={require("../../../assets/dietWalter.png")} />
            <Styled.Form>
              <Styled.BoxInput>
                <Styled.Title>{inputs[selectedPage].label}</Styled.Title>
                <Pressable
                  onPress={() => {
                    input == "nascimento" && toggleDatePicker();
                  }}
                >
                  <InputForm
                    placeholder={inputs[selectedPage].placeholder}
                    onChangeText={onChangeInputs}
                    value={valueInput}
                    editable={input == "nascimento" ? false : true}
                  />
                </Pressable>
              </Styled.BoxInput>
              {showPicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChangeDate}
                  maximumDate={new Date("2010-1-1")}
                  minimumDate={new Date("1900-1-1")}
                />
              )}

              <Button label="Avançar" onPress={handleClickNext} />
            </Styled.Form>
          </KeyboardAwareScrollView>
        </>
      )}
      <Toast />
    </Styled.Wrapper>
  );
}
