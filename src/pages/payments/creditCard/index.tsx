import { MenuItem, Stack, TextField } from "@mui/material";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PaymentInfo from "../../../components/PaymentInfo";
import { formattedValue } from "../../../utils/number";

export default function creditCard() {
  const paymentString = sessionStorage.getItem("payment");
  const payment = paymentString ? JSON.parse(paymentString) : null;

  const paymentStatusString = sessionStorage.getItem("payment-status");
  const paymentStatus = paymentStatusString ? JSON.parse(paymentStatusString) : null;

   return (
    <Stack>
      <Header text={`João, pague o restante em ${payment.part}x no cartão`} />
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Nome completo"
          variant="outlined"
        />

        <TextField id="outlined-basic" label="CPF" variant="outlined" />

        <TextField
          id="outlined-basic"
          label="Número do cartão"
          variant="outlined"
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField id="outlined-uncontrolled" label="Vencimento" />

          <TextField id="outlined-uncontrolled" label="CVV" />
        </Stack>

        <TextField
          id="outlined-basic"
          label="Número de Parcelas"
          variant="outlined"
          select
          value={1}
          disabled
        >
          <MenuItem value="1">{`${payment.part}x de R$ ${formattedValue(
            payment.partValue
          )}`}</MenuItem>
        </TextField>
      </Stack>

      <PaymentInfo
        payments={paymentStatus}
        totalValue={payment.totalValue}
      />

      <Footer />
    </Stack>
  );
}
