import { MockTestComponent } from "@/components/MockTestComponent";
import { Stack } from "@mui/material";

const mockTestType = [
  { bgcolor: "#E6F2ED", examname: "IELTS", textcolor: "#048848" },
  { bgcolor: "#FFFAF0", examname: "TOEFEL", textcolor: "#996F00" },
];

export const MockTestSection = () => {
  return (
    <Stack direction={"row"} py={7} gap={"30px"}>
      {mockTestType.map((item, index) => {
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
  );
};
