/** @format */
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { commonStyles } from "../theme/common.styles";

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
}
export const SafeBottomContainer: React.FC<ISafeContainer> = ({ children }) => {
  const paddingBottom = useSafeAreaInsets().bottom;
  return <View style={[commonStyles.flex, { paddingBottom }]}>{children}</View>;
};
