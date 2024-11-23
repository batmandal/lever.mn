"use client";
import { AuthButton, AuthInput } from "@/components";
import { FacebookOutlined, Google } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from "yup";

const authButtons = [
  { name: "“Google” ашиглан нэвтрэх", icon: Google },
  { name: "“Facebook” ашиглан нэвтрэх", icon: FacebookOutlined },
];

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required(),
  password: yup.string().required(),
});

const LogIn = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.success(`${values.email}, ${values.password}`);
    },
  });

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
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <AuthInput
              inputText="Нууц үг"
              inputLabel="Нууц үгээ оруулна уу..."
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // error={formik.touched.password}
              helperText={formik.touched.password && formik.errors.password}
              type="password"
            />
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                borderRadius: "16px",
                height: "56px",
                bgcolor: "primary.dark",
              }}
              type="submit"
              disabled={!formik.values.email || !formik.values.password}
              onClick={() => {
                router.push("../");
                // formik.submitForm();
              }}
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
