import { Box, Chip, Divider, Stack } from "@mui/material";
import Card from "../../../components/CardSelect";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState } from "react";
import CardGroup from "../../../components/CardGroup";

export default function PaymentMethod() {
  const [values] = useState([
    {
      partValue: 15300,
      part: 2,
      totalValue: 30600,
    },
    {
      partValue: 10196.66,
      part: 3,
      totalValue: 30620,
    },
    {
      partValue: 7725,
      part: 4,
      totalValue: 30900,
    },
    {
      partValue: 6300,
      part: 5,
      totalValue: 31500,
    },
    {
      partValue: 5283.33,
      part: 6,
      totalValue: 31699.98,
    },
    {
      partValue: 4542.85,
      part: 7,
      totalValue: 31800,
    },
  ]);

  const pixValue = {
    partValue: 30500,
    part: 1,
    totalValue: 30500,
  };

  return (
    <Stack>
      <Header text="João, como você quer pagar?" />
      <Card pixValue={pixValue} />
      <Box>
        <Chip
          label="Pix Parcelado"
          sx={{
            fontSize: 16,
            fontWeight: "fontWeightBold",
            px: 1,
            height: 26,
            position: "relative",
            top: 14,
            left: 18,
            backgroundColor: "info.main",
          }}
        />
      </Box>
      <Stack border="2px solid" borderColor="info.main" borderRadius={3}>
        {values.map((value, index) => (
          <>
            <CardGroup value={value} key={index} />
            <Divider />
          </>
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
}
