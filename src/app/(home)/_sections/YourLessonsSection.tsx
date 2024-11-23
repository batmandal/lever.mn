import { ChickenImage } from "@/assets/svg/ChickenImage";
import {
  // CourseCard,
  CourseChoice,
} from "@/components";

import { Add, Clear } from "@mui/icons-material";
import {
  Button,
  //  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const buttonNames = ["Бүгд", "Дууссан", "Сурч байгаа", "Эхлээгүй"];
const aboutOfLessons = [
  { name: "Ielts-writing", price: 120000 },
  { name: "Ielts-speaking", price: 120000 },
  { name: "Ielts-listening", price: 120000 },
  { name: "Ielts-reading", price: 120000 },
  { name: "Ielts-writing", price: 120000 },
  { name: "Ielts-speaking", price: 120000 },
  { name: "Ielts-listening", price: 120000 },
  { name: "Ielts-reading", price: 120000 },
  { name: "Ielts-writing", price: 120000 },
  { name: "Ielts-speaking", price: 120000 },
  { name: "Ielts-listening", price: 120000 },
  { name: "Ielts-reading", price: 120000 },
  { name: "Ielts-writing", price: 120000 },
  { name: "Ielts-speaking", price: 120000 },
  { name: "Ielts-listening", price: 120000 },
];

// const courses = [
//   { name: "IELTS-speaking", class: "IELTS class A" },
//   { name: "IELTS-writing", class: "IELTS class B" },
//   { name: "IELTS-listening", class: "IELTS class C" },
//   { name: "IELTS-reading", class: "IELTS class D" },
// ];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "background.paper",
  borderRadius: "12px",
  overflow: "hidden",
};

export const YourLessonsSection = () => {
  const [activeTab, setActiveTab] = useState(buttonNames[0]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <Stack alignItems={"center"}>
            <Typography fontWeight={400} fontSize={16} color="#545454">
              Танд одоогоор хичээл байхгүй учир гэрээт сургалтуудад
            </Typography>
            <Typography fontWeight={400} fontSize={16} color="#545454">
              бүртгүүлэх эсвэл хичээлүүдээс сонгож суралцаарай.
            </Typography>
          </Stack>
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
          onClick={handleOpen}
        >
          <Add /> Сургалтанд бүртгүүлэх
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Stack sx={style}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              py={"20px"}
              px={"24px"}
            >
              <Typography fontSize={14} fontWeight={500} color="text.secondary">
                Хичээл сонгох
              </Typography>
              <Stack color={"text.primary"} onClick={handleClose}>
                <Clear />
              </Stack>
            </Stack>
            <Stack overflow={"scroll"} maxHeight={336}>
              {aboutOfLessons.map((item, index) => {
                return (
                  <CourseChoice
                    key={index}
                    courseName={item.name}
                    coursePrice={item.price}
                  />
                );
              })}
            </Stack>
            <Stack
              height={80}
              bgcolor={"background.default"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              px={"24px"}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                width={"60%"}
                alignItems={"center"}
              >
                <Typography
                  fontSize={14}
                  fontWeight={500}
                  color="text.secondary"
                >
                  Нийт төлөх:
                </Typography>
                {98}₮
              </Stack>
              <Button
                sx={{
                  bgcolor: "primary.dark",
                  boxShadow: "none",
                  borderRadius: "16px",
                  width: "fit-content",
                }}
                variant="contained"
              >
                Төлбөр төлөх
              </Button>
            </Stack>
          </Stack>
        </Modal>
      </Stack>
      {/* <Grid container spacing={2}>
        {courses.map((item, index) => {
          return (
            <Grid key={index} item lg={4} md={6} sm={6} xs={12}>
              <LessonCard lessonName={item.name} className={item.class} />
            </Grid>
          );
        })}
      </Grid> */}
    </Stack>
  );
};
