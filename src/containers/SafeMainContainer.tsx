/** @format */
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { commonStyles } from "theme/common.styles";

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
}
export const SafeMainContainer: React.FC<ISafeContainer> = ({ children }) => {
  const paddingTop = useSafeAreaInsets().top;
  const paddingBottom = useSafeAreaInsets().bottom;

  return (
    <View style={[commonStyles.flex, { paddingTop, paddingBottom }]}>
      {children}
    </View>
  );
};
