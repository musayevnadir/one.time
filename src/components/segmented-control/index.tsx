/** @format */
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { ISegmentedControl } from "./type";

export const SegmentedControl: React.FC<ISegmentedControl> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
