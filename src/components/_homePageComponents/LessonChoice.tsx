import { Checkbox, Stack, Typography } from "@mui/material";

type lessonType = { lessonName: string; lessonPrice: number };
export const LessonChoice = (props: lessonType) => {
  const { lessonName, lessonPrice } = props;
  return (
    <Stack
      width={"100%"}
      height={"56px"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={3}
      borderTop={"1px solid #E2E2E2"}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox color="success" />

        <Typography>{lessonName}</Typography>
      </Stack>
      {lessonPrice}₮
    </Stack>
  );
};
