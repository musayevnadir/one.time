/** @format */
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Input } from "components/input";
import { NoteItem } from "components/note-item";

export const Note: React.FC = () => {
  return (
    <View style={styles.container}>
      <Input text={"Search Note"} />
      <TouchableOpacity style={styles.noteItem}>
        <NoteItem />
      </TouchableOpacity>
    </View>
  );
};
