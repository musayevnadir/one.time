/** @format */
/** @format */
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { commonStyles } from "../theme/common.styles";

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
}
export const SafeTopContainer: React.FC<ISafeContainer> = ({ children }) => {
  const paddingTop = useSafeAreaInsets().top;
  return <View style={[commonStyles.flex, { paddingTop }]}>{children}</View>;
};
