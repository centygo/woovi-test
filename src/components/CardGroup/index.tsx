import { Box, Card, Radio, Typography } from "@mui/material";
import { formattedValue } from "../../utils/number";
import { useNavigate } from "react-router";

interface CardSelectProps {
  value?: {
    part: number;
    partValue: number;
    totalValue: number;
  };
}

export default function CardGroup({ value }: CardSelectProps) {
  if (!value) {
    return null;
  }

  const navigate = useNavigate();

  const handleButtonClick = () => {
    sessionStorage.setItem("payment", JSON.stringify(value));
    navigate("/payment-pix");
  };

  return (
    <Box display="flex" alignItems="left" flexDirection="column">
      <Card
        variant="outlined"
        sx={{
          color: "primary",
          p: 2.6,
          border: "none",
          borderColor: "info.main",
          borderRadius: 3,
        }}
        onClick={handleButtonClick}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontSize: 24, fontWeight: "fontWeightMedium" }}>
            <b>{value.part}x</b> R$ {formattedValue(value.partValue)}
          </Typography>

          <Radio
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          />
        </Box>
        <Typography
          sx={{ color: "text.secondary", fontWeight: "fontWeightMedium" }}
        >
          R$ {formattedValue(value.totalValue)}
        </Typography>
        {value.part === 4 && (
          <Typography
            sx={{
              color: "secondary.contrastText",
              fontWeight: "fontWeightMedium",
              backgroundColor: "secondary.main",
              borderRadius: 1,
              p: 0.5,
            }}
          >
            <b>-3% de juros:</b> Melhor opção de parcelamento
          </Typography>
        )}
      </Card>
    </Box>
  );
}
