"use client";

import * as React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  //   WorkWeek,
  Month,
  //   Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { Stack } from "@mui/material";

const App = () => {
  const data = [
    {
      Id: 1,
      Subject: "Ielts speaking",
      Location: "Office",
      StartTime: new Date(2025, 1, 11, 10, 0),
      EndTime: new Date(2025, 1, 11, 12, 30),
      IsAllDay: false,
      Priority: "High",
      //   RecurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1",
    },
  ];

  return (
    <Stack width={1200} height={600} bgcolor={"red"}>
      <ScheduleComponent
        eventSettings={{ dataSource: data }}
        width={"90%"}
        height={"90%"}
      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="Month" />
        </ViewsDirective>
        <Inject services={[Day, Week, Month]} />
      </ScheduleComponent>
    </Stack>
  );
};
export default App;
