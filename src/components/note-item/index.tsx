/** @format */
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from "icons/bi:pin-angle-fill.svg";

export const NoteItem: React.FC = () => {
  return (
    <View>
      <Text style={styles.text}>
        this morning's meeting, we have to improve the quality of office
        facilities and another...
      </Text>
      <View style={styles.dataContainer}>
        <Text style={styles.date}>28/10/2012</Text>
        <Icon />
      </View>
    </View>
  );
};
