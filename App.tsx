/** @format */

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./src/configs/styles-config";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}
