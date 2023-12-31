/** @format */
import React from "react";
import { View, Text } from "react-native";
import { Header } from "components/header";
import { SafeTopContainer } from "containers/SafeTopContainer";
import { styles } from "./styles";
import LogoOneTime from "icons/on.time.svg";
import IconBell from "icons/clarity:notification-solid-badged.svg";
import IconMenu from "icons/carbon:overflow-menu-vertical .svg";

export const Schedule: React.FC = () => {
  return (
    <SafeTopContainer>
      <View style={styles.headerContainer}>
        <Header
          iconOneTime={LogoOneTime}
          iconBell={IconBell}
          iconMenuVertical={IconMenu}
        />
      </View>
    </SafeTopContainer>
  );
};
