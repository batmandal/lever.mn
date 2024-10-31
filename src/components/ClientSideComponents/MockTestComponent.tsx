import { ArrowForward } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

export type MockTestComponentType = {
  bgcolor: String;
  examname: String;
  textcolor: String;
  onClick: () => void;
};

export const MockTestComponent = (props: MockTestComponentType) => {
  const { bgcolor, examname, textcolor, onClick } = props;
  return (
    <Stack
      width={"100%"}
      height={"184px"}
      bgcolor={`${bgcolor}`}
      borderRadius={3}
      padding={3}
      justifyContent={"space-between"}
    >
      <Stack>
        <Typography color={`${textcolor}`} fontWeight={700} fontSize={20}>
          {examname} Mock test
        </Typography>
        <Typography fontWeight={400} fontSize={14} color="#545454">
          Үнэгүй “{examname} mock test” өгч өөрийгөө сориорой.
        </Typography>
      </Stack>

      <Button
        onClick={onClick}
        variant="outlined"
        sx={{
          width: "fit-content",
          borderRadius: "16px",
          py: "18px",
          px: 3,
          gap: "8px",
        }}
      >
        <Typography color="text.secondary" fontWeight={500} fontSize={12}>
          Тест бөглөх
        </Typography>
        <ArrowForward sx={{ color: "text.secondary" }} />
      </Button>
    </Stack>
  );
};
