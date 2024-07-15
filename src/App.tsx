import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "@fontsource/nunito/600.css";
import "@fontsource/nunito/800.css";

import PaymentMethod from "./pages/payments/method";
import PaymentPix from "./pages/payments/pix";
import PaymentCard from "./pages/payments/creditCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/payment-method"} replace />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/payment-pix" element={<PaymentPix />} />
        <Route path="/payment-card" element={<PaymentCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
