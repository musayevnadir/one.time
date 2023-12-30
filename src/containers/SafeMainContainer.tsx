/** @format */
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
}
export const SafeMainContainer: React.FC<ISafeContainer> = ({ children }) => {
  const paddingTop = useSafeAreaInsets().top;
  const paddingBottom = useSafeAreaInsets().bottom;

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[
        "rgba(42,42,46,1) -5.44%",
        "rgba(43,18,90,1) 52.05%",
        "rgba(0,0,0,1) 112.41%",
      ]}
    >
      <View style={[{ paddingTop, paddingBottom }]}>{children}</View>
    </LinearGradient>
  );
};
