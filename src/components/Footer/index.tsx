import { Stack, Typography } from "@mui/material";
import Shield from "../../assets/shield-check.svg";
import LogoMinimal from "../../assets/logo-minimal.svg";

export default function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      margin={4}
    >
      <img src={Shield} height={18} />

      <Stack direction="row" spacing={0.4} alignItems="center">
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: "fontWeightMedium",
            color: "text.secondary",
          }}
        >
          Pagamento 100% seguro via:
        </Typography>
        <img src={LogoMinimal} height={18} />
      </Stack>
    </Stack>
  );
}
