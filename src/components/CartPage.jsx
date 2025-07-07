import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removefromcart } from "../cartslice";

import amul from "../images/amul.png";
import curd from "../images/curd.png";
import butter from "../images/butter.png";
import bread from "../images/bread.png";
import bread1 from "../images/bread1.png";
import bread2 from "../images/bread2.png";
import cheese from "../images/cheese.png";
import drinks from "../images/drinks.png";
import snacks from "../images/snacks.png";
import sweet from "../images/sweet.png";

const CartPage = () => {
  const images = {
    "amul.png": amul,
    "butter.png": butter,
    "curd.png": curd,
    "bread.png": bread,
    "bread1.png": bread1,
    "bread2.png": bread2,
    "cheese.png": cheese,
    "drinks.png": drinks,
    "snacks.png": snacks,
    "sweet.png": sweet
  };

  const cartItems = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (index) => {
    dispatch(removefromcart(index));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace(/\D/g, ""), 10);
    return total + numericPrice * (item.quantity || 1);
  }, 0);

  return (
    <div style={styles.container}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => {
            const imgSrc = images[item.image] || amul;

            return (
              <div key={index} style={styles.item}>
                <img
                  src={imgSrc}
                  alt={item.name}
                  style={styles.image}
                />

                <div style={styles.details}>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                </div>

                <button
                  style={styles.removeButton}
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            );
          })}

          <div style={styles.total}>
            <strong>Total: ₹{totalPrice}</strong>
          </div>

          <button
            style={styles.checkoutButton}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "100px auto 50px",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  details: {
    flex: 1,
  },
  removeButton: {
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  total: {
    textAlign: "right",
    marginTop: "20px",
    fontSize: "18px",
  },
  checkoutButton: {
    marginTop: "20px",
    background: "#1ba672",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default CartPage;
