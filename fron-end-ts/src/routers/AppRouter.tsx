import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import BusTicket from "../pages/BusTicket/BusTicket";
import TicketManagement from "../Components/TicketManagement";
import AuthContainer from "../pages/Auth/AuthContainer";
import Payment from "../pages/payment/Payment";
import { ForgotPassword } from "../pages/Auth/ForgotPassword";
import { ResetPassword } from "../pages/Auth/ResetPassword";


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<Home setCurrentPage={() => {}} />} />
        
        {/* Trang vé xe bus */}
        <Route path="/busTicket" element={<BusTicket setCurrentPage={() => {}} />} />
        
        {/* Trang đăng nhập */}
        <Route path="/auth" element={<AuthContainer onAuthSuccess={() => {}} />} />
        
        {/* Trang quản lý vé */}
        <Route path="/ticketManagement" element={<TicketManagement />} />
        
        {/* Trang thanh toán */}
        <Route path="/payment" element={<Payment />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;