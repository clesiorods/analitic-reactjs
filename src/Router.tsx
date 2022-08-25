import { Route, Routes } from "react-router-dom";
import { Actives } from "./pages/Actives";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/resumo" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ativos" element={<Actives />} />
    </Routes>
  );
}