import { Scheduler } from "@/components";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const buttonNames = ["Бүгд", "Орсон", "Удахгүй эхлэх"];

export const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState(buttonNames[0]);
  return (
    <Stack spacing={4} py={7}>
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography color="text.secondary" fontWeight={700} fontSize={24}>
          Хичээлийн хуваарь
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
      {/* <Scheduler /> */}
    </Stack>
  );
};
