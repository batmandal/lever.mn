"use client";
import { CourseCard } from "@/components";
import { Container, Grid, Stack, Typography } from "@mui/material";

const courseDatas = [
  {
    name: "Math",
    class: "EYSH math class",
  },
  {
    name: "English",
    class: "EYSH english class",
  },
  {
    name: "Physics",
    class: "EYSH physics class",
  },
  {
    name: "Biology",
    class: "EYSH biology class",
  },
  {
    name: "Chemistry",
    class: "EYSH chemistry class",
  },
  {
    name: "Society",
    class: "EYSH society class",
  },
  {
    name: "SAT",
    class: "SAT class",
  },
];

const Additional = () => {
  return (
    <Stack paddingTop={7}>
      <Container>
        <Typography fontSize={24} fontWeight={700} marginBottom={4}>
          Танд санал болгох хичээлүүд
        </Typography>
        <Grid container spacing={2}>
          {courseDatas.map((item, index) => {
            return (
              <Grid item key={index} lg={4} md={6} sm={6} xs={12}>
                <CourseCard courseName={item.name} className={item.class} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Stack>
  );
};
export default Additional;
