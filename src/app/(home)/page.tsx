"use client";

import { Container, Stack } from "@mui/material";
import {
  MockTestSection,
  ScheduleSection,
  YourLessonsSection,
} from "./_sections";

export default function Home() {
  return (
    <Stack>
      <Container>
        <YourLessonsSection />
        <MockTestSection />
        <ScheduleSection />
      </Container>
    </Stack>
  );
}
