import { Logo } from "@/assets/svg";
import { Container, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container sx={{ py: "56px" }}>
      <Stack
        width={"100%"}
        bgcolor={"#EEEEEE"}
        py={5}
        px={"30px"}
        borderRadius={"16px"}
        spacing={2}
      >
        <Logo />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          color={"text.primary"}
        >
          <Stack direction={"row"} spacing={5}>
            <Typography> © 2022, Les.</Typography>
            <Typography>Үйлчилгээний нөхцөл</Typography>
            <Typography>Нууцлалын бодлого</Typography>
          </Stack>
          <Stack direction={"row"} spacing={5}>
            <Typography>Тусламж</Typography>
            <Typography>Холбоо барих</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
