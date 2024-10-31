"use client";

import { MockTestComponent } from "@/components/ClientSideComponents/MockTestComponent";
import { Stack } from "@mui/material";

const exams = [
  { bgcolor: "#E6F2ED", examname: "IELTS", textcolor: "#048848" },
  { bgcolor: "#FFFAF0", examname: "TOEFEL", textcolor: "#996F00" },
];

export default function Home() {
  return (
    <Stack>
      <Stack direction={"row"} spacing={"30px"}>
        {exams.map((item, index) => {
          return (
            <MockTestComponent
              key={index}
              textcolor={item.textcolor}
              bgcolor={item.bgcolor}
              examname={item.examname}
              onClick={() => {}}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
