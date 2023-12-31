/** @format */
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { IButtonSegmentedControl } from "./type";

export const ButtonSegmentedControl: React.FC<IButtonSegmentedControl> = ({
  text,
  id,
  onPress,
  activeButton,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        activeButton === id ? styles.activeButtonColor : null,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
