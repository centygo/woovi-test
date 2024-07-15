import { Box, Typography } from "@mui/material";
import Logo from "../../assets/logo.svg";

interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap={5}
      margin={2}
      textAlign="center"
    >
      <img src={Logo} />
      <Typography sx={{ fontSize: 24, fontWeight: "fontWeightBold" }}>
        {text}
      </Typography>
    </Box>
  );
}
