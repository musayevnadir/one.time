/** @format */
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { IHeader } from "./types";

export const Header: React.FC<IHeader> = ({
  iconOneTime,
  iconBell,
  iconMenuVertical,
}) => {
  return (
    <View style={styles.container}>
      {iconOneTime ? React.createElement(iconOneTime) : null}
      <View style={styles.menuContainer}>
        {iconBell ? React.createElement(iconBell) : null}
        {iconMenuVertical ? React.createElement(iconMenuVertical) : null}
      </View>
    </View>
  );
};
