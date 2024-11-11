"use client";
import { AuthButton, AuthInput } from "@/components";
import { FacebookOutlined, Google } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const authButtons = [
  { name: "“Google” ашиглан нэвтрэх", icon: Google },
  { name: "“Facebook” ашиглан нэвтрэх", icon: FacebookOutlined },
];

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required(),
});

const SignUp = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.email, console.log(values.email);
    },
  });
  return (
    <Stack direction={"row"} height={"100vh"} bgcolor={"#EFF3FE"}>
      <Stack
        width={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={7}
        bgcolor={"background.default"}
      >
        <Stack width={400}>
          <Typography
            fontWeight={700}
            fontSize={28}
            color="text.secondary"
            sx={{ textAlignLast: "center" }}
          >
            Эхний хичээлээ “Lever”-д нэгдээд үзээрэй
          </Typography>
        </Stack>

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
            <Typography
              fontWeight={500}
              fontSize={12}
              color="text.primary"
              whiteSpace={"nowrap"}
            >
              Эсвэл мэйл хаягаараа бүртгүүлээрэй
            </Typography>
            <Stack width={"100%"} border={"solid 1px #E2E2E2"}></Stack>
          </Stack>
          <Stack spacing={3}>
            <AuthInput
              inputText="Мэйл хаяг"
              inputLabel="Мэйл хаягаа оруулна уу..."
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                borderRadius: "16px",
                height: "56px",
                backgroundColor: "primary.dark",
              }}
              disabled={!formik.values.email}
              onClick={() => formik.handleSubmit()}
            >
              Үргэлжлүүлэх
            </Button>
          </Stack>
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

export default SignUp;
