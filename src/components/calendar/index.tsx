/** @format */
import React, { useState } from "react";
import { CalendarList } from "react-native-calendars";
import { styles } from "./styles";

export const CalendarSchedule: React.FC = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <CalendarList
      style={styles.container}
      theme={styles.calendarTheme}
      hideArrows={true}
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      pastScrollRange={50}
      futureScrollRange={50}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
    />
  );
};
