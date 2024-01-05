/** @format */
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { SafeTopContainer } from "containers/SafeTopContainer";
import { Header } from "components/header";
import { SegmentedControl } from "components/segmented-control";
import { CalendarSchedule } from "components/calendar";
import { ButtonSegmentedControl } from "components/button/button-segmented-control";
import { ScheduleList } from "components/schedule-list";
import { DataSegmentButton } from "mock/segmented-control";
import { DataSchedulerList } from "mock/shedule-list";
import LogoOneTime from "icons/on.time.svg";
import IconBell from "icons/clarity:notification-solid-badged.svg";
import IconMenu from "icons/carbon:overflow-menu-vertical .svg";
import { Note } from "screens/note";

export const Schedule: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [screen, setScreen] = useState(true);

  const handlePress = (id: number) => {
    setActiveButton(id);
    setScreen(id !== 1);
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
      {screen ? (
        <ScrollView>
          <CalendarSchedule />
          <Text style={styles.scheduleText}>Schedule</Text>
          <View style={styles.scheduleNoteContainer}>
            {DataSchedulerList.map((element) => (
              <ScheduleList
                key={element.id}
                mainText={element.mainText}
                time={element.time}
                place={element.place}
                notes={element.notes}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <Note />
      )}
    </SafeTopContainer>
  );
};
