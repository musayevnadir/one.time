/** @format */
import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import MagnifyingGlass from "icons/eva:search-fill.svg";
import { IInput } from "./types";

export const Input: React.FC<IInput> = ({ text }) => {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity>
        <MagnifyingGlass />
      </TouchableOpacity>
      <TextInput placeholder={text} />
    </View>
  );
};
