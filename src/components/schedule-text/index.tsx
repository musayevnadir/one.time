/** @format */

import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { IScheduleText } from "./types";

export const ScheduleText: React.FC<IScheduleText> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};
