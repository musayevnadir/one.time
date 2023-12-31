/** @format */
import React from "react";
import { View, Text } from "react-native";
import { SafeMainContainer } from "containers/SafeMainContainer";
import { styles } from "./styles";
import { ButtonStart } from "components/button/button-start";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LogoOnTime from "icons/on.time.big.svg";

export const Onboarding: React.FC = () => {
  const pressButtonStart = async () => {
    try {
      await AsyncStorage.setItem("@viewOnboarding", "true");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <SafeMainContainer>
      <View style={[styles.container]}>
        <LogoOnTime />
        <Text style={styles.text}>Make yourself {"\n"} more on time</Text>
        <View style={styles.buttonContainer}>
          <ButtonStart onPress={pressButtonStart} text={"START"} />
        </View>
      </View>
    </SafeMainContainer>
  );
};
