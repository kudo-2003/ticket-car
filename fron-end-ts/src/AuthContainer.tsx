import { useState, useCallback } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import "./styles.css";

export default function AuthContainer() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleAuth = useCallback(() => {
        setIsSignUp((prev) => !prev);
    }, []);

    return (
        <div className={`container ${isSignUp ? "active" : ""}`}>
            <div className="form-container sign-up" aria-hidden={!isSignUp}>
                <SignUp />
            </div>
            <div className="form-container sign-in" aria-hidden={isSignUp}>
                <SignIn />
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" onClick={toggleAuth}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all site features</p>
                        <button className="hidden" onClick={toggleAuth}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
