import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthContainer from "./Auth/AuthContainer";
import TicketManagement from "./Components/TicketManagement";
import HelpIcon from "./Components/HelpIcon";
import ChatIcon from "./Components/ChatIcon"; // Import ChatIcon
import Home from "./Components/home/home";
import "./Styles/App.css";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Chuyển sang giao diện quản lý vé sau khi đăng nhập thành công
  };

  return (
    <Router>
      <main>
        {/* {isAuthenticated ? (
          <TicketManagement /> // Hiển thị giao diện quản lý vé nếu đã đăng nhập
        ) : (
          <AuthContainer onAuthSuccess={handleLoginSuccess} /> // Hiển thị giao diện đăng nhập nếu chưa đăng nhập
        )} */}
       
      </main>
      <Routes>
        {/* Định nghĩa route cho trang Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
