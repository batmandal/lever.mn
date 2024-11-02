import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

type SectionHeaderType = {
  title: string;
  buttonNames: string[];
  onClick: () => void;
};

export const SectionHeader = (props: SectionHeaderType) => {
  const { title, buttonNames, onClick } = props;
  const [activeTab, setActiveTab] = useState(buttonNames[0]);
  return (
    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
      <Typography color="text.secondary" fontWeight={700} fontSize={24}>
        {title}
      </Typography>
      <Stack direction={"row"} spacing={2}>
        {buttonNames.map((item, index) => {
          return (
            <Button
              variant="outlined"
              sx={{ color: "text.primary", borderRadius: "8px" }}
              key={index}
              onClick={onClick}
            >
              {item}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};
