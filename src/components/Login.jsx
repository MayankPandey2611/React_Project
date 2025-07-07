import { Link } from "react-router-dom";

const LoginPage=()=> {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login to Blinkit</h2>
        <p className="login-subtitle">Get access to your orders, wishlist and recommendations</p>
        
        <form className="login-form">
          <input
            type="text"
            placeholder="Enter Email or Mobile Number"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-text">
          New to Blinkit? 
      <Link
        to="/register"
        style={{
          display: "inline-block",
          marginTop: "16px",
          textDecoration: "none",
          color: "#1ba672",
          fontWeight: "bold",
        }}
      >
        Create an account
      </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
