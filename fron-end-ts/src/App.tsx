import React, { useState } from "react";
import AuthContainer from "./Auth/AuthContainer";
import TicketManagement from "./Components/TicketManagement";
import HelpIcon from "./Components/HelpIcon";
import ChatIcon from "./Components/ChatIcon"; // Import ChatIcon
import "./Styles/App.css";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Chuyển sang giao diện quản lý vé sau khi đăng nhập thành công
  };

  return (
    <main>
      {isAuthenticated ? (
        <TicketManagement /> // Hiển thị giao diện quản lý vé nếu đã đăng nhập
      ) : (
        <AuthContainer onAuthSuccess={handleLoginSuccess} /> // Hiển thị giao diện đăng nhập nếu chưa đăng nhập
      )}
      <HelpIcon /> {/* Icon trợ giúp */}
      <ChatIcon /> {/* Icon chat */}
    </main>
  );
};

export default App;
