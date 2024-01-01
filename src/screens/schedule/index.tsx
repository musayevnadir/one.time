/** @format */
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Header } from "components/header";
import { SafeTopContainer } from "containers/SafeTopContainer";
import { styles } from "./styles";
import { SegmentedControl } from "components/segmented-control";
import { ButtonSegmentedControl } from "components/button/button-segmented-control";
import { DataSegmentButton } from "mock/segmented-control";
import { CalendarSchedule } from "components/calendar";
import LogoOneTime from "icons/on.time.svg";
import IconBell from "icons/clarity:notification-solid-badged.svg";
import IconMenu from "icons/carbon:overflow-menu-vertical .svg";
import { ScheduleText } from "components/schedule-text";

export const Schedule: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handlePress = (id: number) => {
    setActiveButton(id);
  };

  return (
    <SafeTopContainer>
      <View style={styles.headerContainer}>
        <Header
          iconOneTime={LogoOneTime}
          iconBell={IconBell}
          iconMenuVertical={IconMenu}
        />
      </View>
      <View style={styles.segmentedControl}>
        <SegmentedControl>
          {DataSegmentButton.map((element) => (
            <ButtonSegmentedControl
              onPress={() => handlePress(element.id)}
              id={element.id}
              text={element.text}
              key={element.id}
              activeButton={activeButton}
            />
          ))}
        </SegmentedControl>
      </View>
      <ScrollView>
        <CalendarSchedule />
        <View style={styles.scheduleText}>
          <ScheduleText text={"Schedule"} />
        </View>
      </ScrollView>
    </SafeTopContainer>
  );
};
