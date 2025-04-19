import { useState } from "react";
import "./auth_css/ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, {
        email: email,
      });

      if (response.status === 200) {
        alert("Password reset link has been sent to your email.");
        navigate("/signin");
      }
    } catch (error: any) {
      console.error("Error:", error.response?.data?.message || error.message);
      alert(`Failed to send reset link: ${error.response?.data?.message || "Unknown error"}`);
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <form onSubmit={handleForgotPassword}>
          <h1>Forgot Password</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
          <a href="#" onClick={() => navigate("/auth")}>
            Back to Sign In
          </a>
        </form>
      </div>
    </div>
  );
}
