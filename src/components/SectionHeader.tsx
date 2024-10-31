import { Button, Stack, Typography } from "@mui/material";

type SectionHeaderType = {
  title: string;
  buttonNames: string[];
};

export const SectionHeader = (props: SectionHeaderType) => {
  const { title, buttonNames } = props;
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
            >
              {item}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};
