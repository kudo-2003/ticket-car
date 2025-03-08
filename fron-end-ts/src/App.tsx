import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';

const App: React.FC = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our App</h1>
        <div className="auth-toggle">
          <button onClick={() => setIsSignIn(true)}>Sign In</button>
          <button onClick={() => setIsSignIn(false)}>Sign Up</button>
        </div>
        {isSignIn ? <SignIn /> : <SignUp />}
      </header>
    </div>
  );
};

export default App;