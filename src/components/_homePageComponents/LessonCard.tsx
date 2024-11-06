import { ArrowForward, Help } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

const buttons = [
  { icon: <Help />, count: 12 },
  { icon: <Help />, count: 15 },
  { icon: <Help />, count: 13 },
];

export const LessonCard = () => {
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
          IELTS - Speaking
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={12}
          marginBottom={"12px"}
          color="text.primary"
        >
          IELTS Speaking Class A
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
          px: "24px",
          boxShadow: "none",
        }}
      >
        Хичээл эхлүүлэх <ArrowForward />
      </Button>
    </Stack>
  );
};
