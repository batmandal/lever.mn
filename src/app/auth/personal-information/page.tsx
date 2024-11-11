"use client";

import { AuthButton, AuthInput } from "@/components";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const PersonalInformation = () => {
  const router = useRouter();
  return (
    <Stack direction={"row"} height={"100vh"} bgcolor={"#EFF3FE"}>
      <Stack
        width={"50%"}
        bgcolor={"background.default"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={7}
      >
        <Stack spacing={2} alignItems={"center"}>
          <Typography fontWeight={700} fontSize={28} color="text.secondary">
            Таны нэрийг хэн гэдэг вэ?
          </Typography>
          <Typography fontWeight={400} fontSize={14} color="#545454">
            Таны оруулсан нэр багш нарт харагдана.
          </Typography>
        </Stack>
        <Stack spacing={8}>
          <Stack spacing={3}>
            <AuthInput inputText="Мэйл хаяг" inputLabel="email" />
            <Stack direction={"row"} spacing={2}>
              <AuthInput inputText="Овог" inputLabel="Таны овог..."></AuthInput>
              <AuthInput inputText="Нэр" inputLabel="Таны нэр..."></AuthInput>
            </Stack>
            <AuthInput
              inputText="Нууц үг"
              inputLabel="password"
              type="password"
            />
          </Stack>
          <Button
            variant="contained"
            disabled
            sx={{
              borderRadius: "16px",
              height: "56px",
              backgroundColor: "primary.dark",
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Typography fontWeight={400} fontSize={14} color="text.secondary">
            Танд бүртгэл байгаа юу?
          </Typography>
          <Stack
            onClick={() => router.push("./login")}
            sx={{ cursor: "pointer" }}
            color={"primary.dark"}
          >
            Нэвтрэх
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PersonalInformation;
