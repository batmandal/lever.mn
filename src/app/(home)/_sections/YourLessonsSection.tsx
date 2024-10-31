import { ChickenImage } from "@/assets/svg/ChickenImage";
import { SectionHeader } from "@/components/SectionHeader";
import { Add } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

const buttonNames = ["Бүгд", "Дууссан", "Сурч байгаа", "Эхлээгүй"];

export const YourLessonsSection = () => {
  return (
    <Stack py={7} spacing={4}>
      <SectionHeader title="Таны хичээлүүд" buttonNames={buttonNames} />
      <Stack alignItems={"center"} py={5} spacing={5}>
        <ChickenImage />
        <Stack alignItems={"center"} spacing={2}>
          <Typography fontSize={20} fontWeight={700} color="text.secondary">
            Үргэлж шинийг сурна гэдэг гоё
          </Typography>
          <Typography fontWeight={400} fontSize={16} color="#545454">
            Танд одоогоор хичээл байхгүй учир гэрээт сургалтуудад бүртгүүлэх
            эсвэл хичээлүүдээс сонгож суралцаарай.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          sx={{
            color: "text.secondary",
            bgcolor: "#EEEEEE",
            gap: "8px",
            borderRadius: "16px",
            py: "18px",
            px: "24px",
            boxShadow: "none",
          }}
        >
          <Add /> Сургалтанд бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
