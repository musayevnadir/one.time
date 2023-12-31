/** @format */
import React, { useState, useCallback, useEffect } from "react";
import { StatusBar, ActivityIndicator } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "configs/styles-config";
import { Onboarding } from "screens/onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Schedule } from "screens/schedule";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [viewOnboarding, setViewOnboarding] = useState<boolean>(false);

  const checkOnboarding = async () => {
    setLoading(true);
    try {
      const value = await AsyncStorage.getItem("@viewOnboarding");
      if (value !== null) {
        setViewOnboarding(true);
      }
    } catch (error) {
      console.log("Error  @checkOnboarding", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    "OpenSans-Regular-400": require("./assets/fonts/OpenSans_Condensed-Regular.ttf"),
    "Nunito-Bold-400": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold-600": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold-700": require("./assets/fonts/Nunito-Bold.ttf"),
    "Montserrat-Bold-700": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded || fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.root} onLayout={onLayoutRootView}>
      <StatusBar barStyle={"light-content"} />
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={"large"}
          color="#0000ff"
        />
      ) : !viewOnboarding ? (
        <Onboarding />
      ) : (
        <SafeAreaView style={styles.root} edges={["left", "right"]}>
          <Schedule />
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
}
