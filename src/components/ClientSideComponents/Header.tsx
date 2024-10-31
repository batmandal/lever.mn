"use client";

import { Logo } from "@/assets/svg/Logo";
import {
  ExpandMore,
  NotificationsOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { page: "Нүүр хуудас", path: "/" },
  { page: "Хадгалсан хичээл", path: "/saved" },
  { page: "Санал болгох хичээл", path: "/additional" },
];

export const Header = () => {
  const pathname = usePathname();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      height="72px"
      width={"100%"}
    >
      <Stack
        direction="row"
        width={"60%"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Stack padding={3}>
          <Logo />
        </Stack>
        <Stack width={"270px"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Сургалт хайх..."
            sx={{
              backgroundColor: "background.default",
              borderRadius: "12px",
              height: "40px",
              border: "none",
            }}
            inputProps={{
              style: {
                height: "40px",
                backgroundColor: "background.default",
                padding: "1px 10px",
                borderRadius: "12px",
                border: "none",
              },
              startadornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          {menus.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Stack
                  bgcolor={"red"}
                  height="fit-content"
                  py="12px"
                  px="16px"
                  borderRadius={"12px"}
                  sx={{
                    bgcolor: pathname == item.path ? "primary.light" : null,
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={14}
                    sx={{
                      cursor: "pointer",
                      color:
                        pathname == item.path ? "primary.dark" : "text.primary",
                    }}
                  >
                    {item.page}
                  </Typography>
                </Stack>
              </Link>
            );
          })}
        </Stack>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} px={3} spacing={3}>
        <Stack color="text.primary">
          <NotificationsOutlined />
        </Stack>
        <Stack height={"24px"} border={"1px #00000014 solid"}></Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={"12px"}>
          <Stack
            width={"32px"}
            height={"32px"}
            borderRadius={"8px"}
            border={"1px solid #FFE3AC"}
            bgcolor={"#FFFAF0"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography display={"flex"}>T</Typography>
          </Stack>
          <Typography fontWeight={500} fontSize={14}>
            Tetsu
          </Typography>
          <Stack color="text.primary">
            <ExpandMore />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
