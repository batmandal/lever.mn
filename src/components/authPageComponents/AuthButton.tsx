// import { SvgIconComponent } from "@mui/icons-material";
// import { Button } from "@mui/material";

// type AuthButtonType = { buttonName: string; icon: SvgIconComponent };
// export const AuthButton = (props: AuthButtonType) => {
//   const { icon: Icon, buttonName } = props;
//   return (
//     <Button
//       sx={{ color: "text.secondary", borderRadius: "16px" }}
//       variant="outlined"
//     >
//       <Icon />
//       {buttonName}
//     </Button>
//   );
// };

import { SvgIconComponent } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

type AuthButtonType = {
  buttonName: string;
  icon: SvgIconComponent;
};

export const AuthButton = (props: AuthButtonType) => {
  const { icon: Icon, buttonName } = props;

  return (
    <Button
      sx={{
        color: "text.secondary",
        borderRadius: "16px",
        height: "56px",
      }}
      variant="outlined"
    >
      <Stack direction="row" alignItems="center" gap={"8px"}>
        <Icon />
        <Typography fontWeight={500} fontSize={16} color="text.secondary">
          {buttonName}
        </Typography>
      </Stack>
    </Button>
  );
};
