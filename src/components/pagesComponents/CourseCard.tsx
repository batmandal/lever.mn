import {
  ArrowForward,
  ChatBubbleRounded,
  CreateRounded,
  Help,
} from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

const buttons = [
  { icon: <CreateRounded />, count: 12 },
  { icon: <Help />, count: 15 },
  { icon: <ChatBubbleRounded />, count: 13 },
];

type CourseCardType = { courseName: string; className: string };

export const CourseCard = (props: CourseCardType) => {
  const { courseName, className } = props;
  return (
    <Stack
      borderRadius={"12px"}
      height={272}
      bgcolor={"background.paper"}
      py={3}
      spacing={4}
      px={3}
    >
      <Stack>
        <Typography
          fontWeight={700}
          fontSize={20}
          marginBottom={"4px"}
          color="text.secondary"
        >
          {courseName}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={12}
          marginBottom={"12px"}
          color="text.primary"
        >
          {className}
        </Typography>
      </Stack>
      <Stack spacing={1} direction={"row"}>
        {buttons.map((item, index) => {
          return (
            <Button
              key={index}
              sx={{ borderRadius: "12px", gap: "8px", color: "text.secondary" }}
              variant="outlined"
            >
              {item.icon}
              {item.count}
            </Button>
          );
        })}
      </Stack>
      <Button
        variant="contained"
        sx={{
          color: "text.secondary",
          justifyContent: "space-between",
          borderRadius: "12px",
          py: "16px",
          boxShadow: "none",
        }}
      >
        Хичээл эхлүүлэх <ArrowForward />
      </Button>
    </Stack>
  );
};
