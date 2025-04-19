import { useState } from "react";
import "./auth_css/SignIn_SignUp.css"
import { useNavigate } from "react-router-dom";

interface SignInProps {
  onAuthSuccess: () => void;
}

export function SignIn({ onAuthSuccess }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (!response.ok || data.statusCode >= 400) {
        console.error("Signin failed:", data.message || data.error);
        alert(`Signin failed: ${data.message || "Unknown error"}`);
        return;
      }

      console.log("Signin successful:", data);
      alert("Signin successful!");
      onAuthSuccess();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem with the Signin request.");
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <div className="social-icons">
        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
      <span>or use your email password</span>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <a href="#" onClick={() => navigate("/forgot-password")}>
        Forget Your Password?
      </a>
      <button type="submit">Sign In</button>
    </form>
  );
}