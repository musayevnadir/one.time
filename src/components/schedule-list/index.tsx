/** @format */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Divider } from "components/diveder";
import IconBox from "icons/Rectangle-9.svg";
import { IScheduleListMain } from "./types";

export const ScheduleList: React.FC<IScheduleListMain> = ({
  mainText,
  time,
  place,
  notes,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
        <TouchableOpacity>
          <IconBox />
        </TouchableOpacity>
      </View>
      <Divider />
      <View style={styles.timeContainer}>
        <Text style={styles.text}>Time</Text>
        <Text style={styles.text}>{time}</Text>
      </View>
      <View style={styles.notes}>
        <Text style={styles.text}>Place</Text>
        <Text style={styles.text}>{place}</Text>
      </View>
      <View style={styles.notes}>
        <Text style={styles.text}>Notes</Text>
        <Text style={styles.text}>{notes}</Text>
      </View>
    </View>
  );
};
