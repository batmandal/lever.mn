import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useState } from "react";
type AuthInputType = {
  inputText: string;
  inputLabel: string;
};

export const AuthInput = (props: TextFieldProps & AuthInputType) => {
  const { inputText, inputLabel, type = "text" } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack spacing={1}>
      <Typography fontWeight={500} fontSize={14} color="text.secondary ">
        {inputText}
      </Typography>
      <TextField
        inputProps={{ style: { borderRadius: "18px", border: "none" } }}
        variant="outlined"
        placeholder={inputLabel}
        type={type === "password" && showPassword ? "text" : type}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
