import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const CartData = useSelector(state => state.mycart.cart);
  const navigate = useNavigate();

  let netAmount = 0;
  CartData.forEach(item => {
    netAmount += item.price * item.qnty;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/paymentdone");
  };
  const cartItems = useSelector((state) => state.mycart.cart);


    const totalPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace(/\D/g, ""), 10);
    return total + numericPrice * (item.quantity || 1);
  }, 0);

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2 className="checkout-title">Shipping Address</h2>
        <p className="checkout-subtitle">We’ll deliver your order to this address</p>

        
  <div style={styles.total} >
            <strong>Total: ₹{totalPrice}</strong>
          </div>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" className="checkout-input" required />
          <input type="text" placeholder="Enter City" className="checkout-input" required />
          <input type="text" placeholder="Enter Address" className="checkout-input" required />
          <input type="email" placeholder="Enter Email" className="checkout-input" required />
          <input type="text" placeholder="Enter Mobile" className="checkout-input" required />
          <input type="text" placeholder="Enter Pin Code" className="checkout-input" required />
          
          <button type="submit" className="checkout-button">
            submit
          </button>
        </form>
      </div>
    </div>

    
  );
};


const styles = {
   total: {
    textAlign: "right",
    marginTop: "20px",
    fontSize: "18px",
  }
}
export default CheckOut;
