import { useState } from "react";
import "./auth_css/ResetPassword.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Lấy token từ URL

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/reset-password?token=${token}`,
        { password }
      );

      if (response.status === 200) {
        alert("Password has been successfully reset.");
        navigate("/auth");
      }
    } catch (error: any) {
      console.error("Error:", error.response?.data?.message || error.message);
      alert(`Failed to reset password: ${error.response?.data?.message || "Unknown error"}`);
    }
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <form onSubmit={handleResetPassword}>
          <h1>Reset Password</h1>
          {error && <p className="error-message">{error}</p>}
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
          <a href="#" onClick={() => navigate("/auth")}>
            Back to Sign In
          </a>
        </form>
      </div>
    </div>
  );
}