import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        <HomeIcon /> Trang chủ
      </Link>
      <Link to="/busTicket" className="navbar-link">
        <DirectionsBusIcon /> Vé xe bus
      </Link>
      <Link to="/auth" className="navbar-link">
        <LockOpenIcon /> Đăng Nhập
      </Link>
      <Link to="/payment" className="navbar-link">
        <CreditCardIcon /> Thanh toán
      </Link>
    </nav>
  );
};

export default Navbar;