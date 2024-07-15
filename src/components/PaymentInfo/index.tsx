import {
  Accordion,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StatusProgress from "../StatusProgress";
import { formattedValue } from "../../utils/number";

interface Payment {
  label: string;
  value: number;
  paid: boolean;
  method: string;
}

interface PaymentInfoProps {
  payments: Payment[];
  totalValue: number;
}

export default function PaymentInfo({
  payments,
  totalValue,
}: PaymentInfoProps) {
  const method = sessionStorage.getItem("method");

  
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        margin: 2.5,
      }}
    >
      <Stack direction="column" alignItems="center">
        <Typography color="text.secondary" fontWeight="fontWeightMedium">
          Prazo de pagamento:
        </Typography>

        <Typography fontWeight="fontWeightBold">15/12/2021 - 08:17</Typography>
      </Stack>

      {payments.map((payment, index) => (
        <Stack key={index} width="100%">
          <StatusProgress
            value={payment.value}
            label={payment.label}
            paid={payment.paid}
            method={payment.method}
            actualMethod={method}
          />
        </Stack>
      ))}

      <Divider
        sx={{
          color: "info.main",
          height: 4,
        }}
      />

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={14} fontWeight="fontWeightMedium">
          CET: 0,5%
        </Typography>
        <Typography fontSize={18} fontWeight="fontWeightMedium">
          Total: R$ {formattedValue(totalValue)}
        </Typography>
      </Stack>

      <Accordion
        sx={{
          boxShadow: "none",
          padding: 0,
          paddingTop: 1,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            padding: 0,
          }}
        >
          <Typography sx={{ fontWeight: "fontWeightBold" }}>
            Como Funciona?
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Divider
        sx={{
          color: "info.main",
        }}
      />

      <Stack direction="column" alignItems="center">
        <Typography
          color="text.secondary"
          fontWeight="fontWeightMedium"
          fontSize={14}
        >
          Identificador:
        </Typography>

        <Typography fontWeight="fontWeightBold" fontSize={14}>
          2c1b951f356c4680b13ba1c9fc889c47
        </Typography>
      </Stack>
    </Stack>
  );
}
