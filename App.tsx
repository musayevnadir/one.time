/** @format */
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "configs/styles-config";
import { Onboarding } from "screens/onboarding";

export default function App() {
  return (
    <SafeAreaProvider style={styles.root}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.root} edges={["left", "right"]}>
        <Onboarding />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
