import { useState } from "react";
import "./auth_css/SignIn_SignUp.css"
import { useNavigate } from "react-router-dom";

interface SignUpProps {
  onAuthSuccess: () => void;
}

export function SignUp({ onAuthSuccess }: SignUpProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          numberphone: phone,
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("signup successfully!"); // Thông báo thành công
        onAuthSuccess(); // có thể chuyển sang login hoặc home
        console.log("Signup successful:", data);
      
      } else {
        console.error("Signup failed:", data.message);
        alert(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem with the signup request.");
    }
  };
  

  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <div className="social-icons">
        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
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
      <button type="submit">Sign Up</button>
    </form>
  );
}