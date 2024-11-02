"use client";

import { Container, Stack } from "@mui/material";
import {
  MockTestSection,
  ScheduleSection,
  YourLessonsSection,
} from "./_sections";

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
