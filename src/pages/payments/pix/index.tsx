import { useNavigate } from "react-router";

import { Button, Stack, Typography } from "@mui/material";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import QRCode from "../../../assets/qr-code.svg";
import Copy from "../../../assets/copy.svg";
import PaymentInfo from "../../../components/PaymentInfo";
import { useEffect } from "react";
import { formattedValue } from "../../../utils/number";

interface Payment {
  label: string;
  value: number;
  paid: boolean;
  method: string;
}

export default function PaymentPix() {
  const navigate = useNavigate();
  const paymentString = sessionStorage.getItem("payment");
  const payment = paymentString ? JSON.parse(paymentString) : null;

  function transformObject(input: any) {
    const { partValue, part } = input;

    const output = [
      {
        label: "1ª entrada no Pix",
        value: partValue,
        paid: false,
        method: "pix",
      },
      {
        label: "2ª no cartão",
        value: (part - 1) * partValue,
        paid: false,
        method: "credit",
      },
    ];

    return output;
  }

  const handleButtonClick = () => {
    const updatedPaymentStatus = transformObject(payment).map(
      (p: Payment, index: number) => {
        if (index === 0) {
          return { ...p, paid: true };
        }
        return p;
      }
    );

    sessionStorage.setItem("method", "credit");
    sessionStorage.setItem(
      "payment-status",
      JSON.stringify(updatedPaymentStatus)
    );
    navigate("/payment-card");
  };

  useEffect(() => {
    sessionStorage.setItem("method", "pix");
    sessionStorage.setItem(
      "payment-status",
      JSON.stringify(transformObject(payment))
    );
  }, []);

  return (
    <Stack>
      <Header
        text={
          payment.part === 1
            ? `João, pague o valor de R$ ${formattedValue(
                payment.totalValue
              )} pelo Pix`
            : `João, pague a entrada de R$ ${formattedValue(
                payment.partValue
              )} pelo Pix`
        }
      />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            border: "2px solid",
            borderColor: "primary.main",
            borderRadius: 2,
            width: "fit-content",
            p: 1,
          }}
        >
          <img src={QRCode} height={332} />
        </Stack>

        <Button
          variant="contained"
          size="large"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "secondary.main",
            gap: 1.2,
            borderRadius: 2,
          }}
          onClick={handleButtonClick}
        >
          <Typography sx={{ color: "secondary.contrastText" }}>
            Clique para copiar QR CODE
          </Typography>
          <img src={Copy} />
        </Button>
      </Stack>

      <PaymentInfo
        payments={transformObject(payment)}
        totalValue={payment.totalValue}
      />

      <Footer />
    </Stack>
  );
}
