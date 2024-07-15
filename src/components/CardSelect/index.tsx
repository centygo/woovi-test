import { Box, Card, Chip, Radio, Typography } from "@mui/material";
import { formattedValue } from "../../utils/number";
import { useNavigate } from "react-router";

interface CardSelectProps {
  pixValue?: {
    part: number;
    partValue: number;
  };
}

export default function CardSelect({ pixValue }: CardSelectProps) {
  const emoji = "\uD83E\uDD11";

  const navigate = useNavigate();

  const handleButtonClick = () => {
    sessionStorage.setItem("payment", JSON.stringify(pixValue));
    navigate("/payment-pix");
  };

  if (!pixValue) {
    return null;
  }

  return (
    <Box
      display="flex"
      alignItems="left"
      flexDirection="column"
      justifyContent="center"
    >
      <Box>
        <Chip
          label="Pix"
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

      <Card
        variant="outlined"
        sx={{
          color: "primary",
          p: 2.6,
          borderRadius: 3,
          border: "2px solid",
          borderColor: "info.main",
        }}
        onClick={handleButtonClick}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontSize: 24, fontWeight: "fontWeightMedium" }}>
            <b>{pixValue.part}x</b> R$ {formattedValue(pixValue.partValue)}
          </Typography>
          <Radio
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          />
        </Box>
        <Typography
          sx={{ color: "primary.main", fontWeight: "fontWeightMedium" }}
        >
          Ganhe <b>3%</b> de Cashback
        </Typography>
        <Typography
          sx={{
            color: "secondary.contrastText",
            fontWeight: "fontWeightMedium",
            backgroundColor: "secondary.main",
            borderRadius: 1,
            p: 0.5,
          }}
        >
          {emoji} <b>R$ 300,00</b> de volta no seu Pix na hora
        </Typography>
      </Card>
    </Box>
  );
}
