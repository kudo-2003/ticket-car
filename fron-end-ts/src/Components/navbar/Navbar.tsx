import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./navbar_css/Navbar.css"; // Đảm bảo đường dẫn đúng

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">
          <HomeIcon fontSize="small" />
          <span>Trang chủ</span>
        </Link>
        <Link to="/busTicket" className="navbar-link">
          <DirectionsBusIcon fontSize="small" />
          <span>Vé xe bus</span>
        </Link>
        <Link to="/payment" className="navbar-link">
          <CreditCardIcon fontSize="small" />
          <span>Thanh toán</span>
        </Link>
        <Link to="/auth" className="navbar-link">
          <LockOpenIcon fontSize="small" />
          <span>Đăng Nhập</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
