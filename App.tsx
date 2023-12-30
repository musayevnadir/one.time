/** @format */
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "configs/styles-config";

export default function App() {
  return (
    <SafeAreaProvider style={styles.root}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.root} edges={["left", "right"]}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
