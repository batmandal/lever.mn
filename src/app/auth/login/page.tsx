"use client";
import { AuthButton, AuthInput } from "@/components";
import { FacebookOutlined, Google } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const authButtons = [
  { name: "“Google” ашиглан нэвтрэх", icon: Google },
  { name: "“Facebook” ашиглан нэвтрэх", icon: FacebookOutlined },
];

const LogIn = () => {
  const router = useRouter();
  return (
    <Stack direction={"row"} bgcolor={"#EFF3FE"} height={"100vh"}>
      <Stack
        width={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={7}
        bgcolor={"background.default"}
      >
        <Typography fontWeight={700} fontSize={28} color="text.secondary">
          “Lever.mn”-д нэвтрэх
        </Typography>
        <Stack spacing={5}>
          <Stack spacing={2}>
            {authButtons.map((item, index) => {
              return (
                <AuthButton
                  key={index}
                  buttonName={item.name}
                  icon={item.icon}
                />
              );
            })}
          </Stack>
          <Stack
            direction={"row"}
            width={400}
            alignItems={"center"}
            gap={"16px"}
          >
            <Stack width={"100%"} border={"solid 1px #E2E2E2"}></Stack>
            <Typography fontWeight={500} fontSize={12} color="text.primary">
              Эсвэл
            </Typography>
            <Stack width={"100%"} border={"solid 1px #E2E2E2"}></Stack>
          </Stack>
          <Stack spacing={3}>
            <AuthInput
              inputText="Мэйл хаяг"
              inputLabel="Мэйл хаягаа оруулна уу..."
            />
            <AuthInput
              inputText="Нууц үг"
              inputLabel="Нууц үгээ оруулна уу..."
              type="password"
            />
            <Button
              variant="contained"
              sx={{ boxShadow: "none", borderRadius: "16px", height: "56px" }}
              disabled
            >
              Үргэлжлүүлэх
            </Button>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Typography fontWeight={400} fontSize={14} color="text.secondary">
            Танд бүртгэл байхгүй юу?
          </Typography>
          <Stack
            onClick={() => router.push("./signup")}
            sx={{ cursor: "pointer" }}
            color={"primary.dark"}
          >
            Бүртгүүлэх
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LogIn;
