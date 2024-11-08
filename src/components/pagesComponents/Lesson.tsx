import { SvgIconComponent } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export type LessonType = {
  icon: SvgIconComponent;
  lessonName: string;
  time: number;
};

export const Lesson = (props: LessonType) => {
  const { icon: Icon, lessonName, time } = props;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      py={"24px"}
      px={"18px"}
    >
      <Stack direction={"row"} spacing={2} color={"text.secondary"}>
        <Icon />
        {lessonName}
      </Stack>
      <Typography fontSize={12} fontWeight={400} color="text.primary">
        {time} минут
      </Typography>
    </Stack>
  );
};
