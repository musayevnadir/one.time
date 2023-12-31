/** @format */
/** @format */
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
}
export const SafeTopContainer: React.FC<ISafeContainer> = ({ children }) => {
  const paddingTop = useSafeAreaInsets().top;
  return (
    <LinearGradient
      style={styles.mainContainer}
      colors={[
        "rgba(42,42,46,1) -15.5%",
        "rgba(43,18,90,1) 55.67%",
        "rgba(0,0,0,1) 114.26%",
      ]}
    >
      <View style={[{ paddingTop }]}>{children}</View>
    </LinearGradient>
  );
};
