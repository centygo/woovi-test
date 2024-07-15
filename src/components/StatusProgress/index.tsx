import { Stack, Typography } from "@mui/material";
import { formattedValue } from "../../utils/number";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface PaymentProps {
  label: string;
  value: number;
  paid: boolean;
  method: string;
  actualMethod: string | null;
}

export default function StatusProgress({
  label,
  value,
  paid,
  method,
  actualMethod,
}: PaymentProps) {
  return (
    <Stack width="100%" alignItems="top">
      <Stack direction="row" alignItems="center" width="100%">
        {!paid ? (
          <Stack
            sx={{
              border: `3px solid ${
                actualMethod === method ? "#03d69d" : "#e5e5e5"
              }`,
              height: 20,
              width: 20,
              borderRadius: 50,
            }}
          />
        ) : (
          <CheckCircleIcon htmlColor="#03d69d" />
        )}

        <Stack width="100%" ml={1}>
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Typography sx={{ fontWeight: 600 }}>{label}</Typography>
            <Typography sx={{ fontWeight: 800 }}>
              R$ {formattedValue(value)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
