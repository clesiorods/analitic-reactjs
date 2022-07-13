import { Route, Routes } from "react-router-dom";
import { Dashborad } from "./pages/Dashborad";
import { Login } from "./pages/Login";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashborad />} />
    </Routes>
  );
}
