import { ChickenImage } from "@/assets/svg/ChickenImage";
import { Add } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const buttonNames = ["Бүгд", "Дууссан", "Сурч байгаа", "Эхлээгүй"];

export const YourLessonsSection = () => {
  const [activeTab, setActiveTab] = useState(buttonNames[0]);
  return (
    <Stack py={7} spacing={4}>
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography color="text.secondary" fontWeight={700} fontSize={24}>
          Таны хичээлүүд
        </Typography>
        <Stack direction={"row"} spacing={2}>
          {buttonNames.map((item, index) => {
            return (
              <Button
                variant="outlined"
                sx={{
                  color: `${
                    activeTab == item ? "background.paper" : "text.primary"
                  }`,
                  bgcolor: `${activeTab == item ? "primary.dark" : null}`,
                  borderRadius: "8px",
                }}
                key={index}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </Button>
            );
          })}
        </Stack>
      </Stack>
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
