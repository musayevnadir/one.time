/** @format */
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "configs/styles-config";
import { Onboarding } from "screens/onboarding";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "OpenSans-Regular-400": require("./assets/fonts/OpenSans_Condensed-Regular.ttf"),
    "Nunito-Bold-400": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold-600": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold-700": require("./assets/fonts/Nunito-Bold.ttf"),
    "Montserrat-Bold-700": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  return (
    <SafeAreaProvider style={styles.root}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.root} edges={["left", "right"]}>
        <Onboarding />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
