import { SectionHeader } from "@/components/SectionHeader";
import { Stack } from "@mui/material";

const buttonNames = ["Бүгд", "Орсон", "Удахгүй эхлэх"];

export const ScheduleSection = () => {
  return (
    <Stack spacing={4} py={7}>
      <SectionHeader title="Хичээлийн хуваарь" buttonNames={buttonNames} />
    </Stack>
  );
};
