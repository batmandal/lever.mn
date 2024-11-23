import { Checkbox, Stack, Typography } from "@mui/material";

type CourseChoiceType = { courseName: string; coursePrice: number };
export const CourseChoice = (props: CourseChoiceType) => {
  const { courseName, coursePrice } = props;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={"12px"}
      px={3}
      borderTop={"1px solid #E2E2E2"}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox color="secondary" />

        <Typography>{courseName}</Typography>
      </Stack>
      {coursePrice}₮
    </Stack>
  );
};
