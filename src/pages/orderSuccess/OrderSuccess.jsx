import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "../../styles/OrderSuccess.css";
import Navbar from "../../components/navbar/Navbar";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Header />
      <div className="order-success-container">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h1>Order Successful!</h1>
          <p>Your order has been placed successfully.</p>
          <p>
            Order ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <button className="back-home-btn" onClick={() => navigate("/home")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
