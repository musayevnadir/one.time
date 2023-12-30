/** @format */
import React from "react";
import { View, Text } from "react-native";
import { SafeMainContainer } from "containers/SafeMainContainer";
import { styles } from "./styles";
import { ButtonStart } from "components/button/button-start";
import LogoOnTime from "icons/on.time.big.svg";

export const Onboarding: React.FC = () => {
  return (
    <SafeMainContainer>
      <View style={[styles.container]}>
        <LogoOnTime />
        <Text style={styles.text}>Make yourself {"\n"} more on time</Text>
        <View style={styles.buttonContainer}>
          <ButtonStart text={"START"} />
        </View>
      </View>
    </SafeMainContainer>
  );
};
