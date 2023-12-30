/** @format */

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../button-start/styles";
import { commonStyles } from "theme/common.styles";
import { IButtonStart } from "./types";

export const ButtonStart: React.FC<IButtonStart> = ({ text }) => {
  return (
    <TouchableOpacity
      style={[commonStyles.alignJustifyCenter, styles.container]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
