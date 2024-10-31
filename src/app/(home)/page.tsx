"use client";

import { Container, Stack } from "@mui/material";
import { YourLessonsSection } from "./_sections/YourLessonsSection";
import { MockTestSection } from "./_sections/MockTestSection";
import { ScheduleSection } from "./_sections/ScheduleSection";

const names = ["bugd", "dussan", "sirch baigaa"];

export default function Home() {
  return (
    <Stack bgcolor={"background.default"}>
      <Container>
        <YourLessonsSection />
        <MockTestSection />
        <ScheduleSection />
      </Container>
    </Stack>
  );
}
