import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.mycart.cart);
  const number = cartItems.length;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef();

  // SEARCH CODE.....
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
  { id: "amul.png", name: "Amul Butter" },
  { id: "curd.png", name: "Curd" },
  { id: "bread.png", name: "Bread" },
  { id: "cheese.png", name: "Cheese" },
  // add all products you want searchable
];

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
    "sweet.png": sweet,
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (index) => {
    dispatch(removefromcart(index));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace(/\D/g, ""), 10);
    return total + numericPrice * (item.quantity || 1);
  }, 0);


  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img src="logo.png" alt="Logo" style={styles.logo} />
        </div>

{/* SEARCH 

     <div style={styles.searchSection}>
  <FaSearch style={styles.searchIcon} />
  <input
    type="text"
    placeholder="Search for products..."
    style={styles.searchInput}
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button style={styles.searchButton}>Search</button>

  {searchQuery && (
    <div style={styles.searchResults}>
      {filteredProducts.length === 0 ? (
        <p style={{ padding: "8px" }}>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            style={styles.searchResultItem}
            onClick={() => {
              navigate(`/product/${product.id}`);
              setSearchQuery("");
            }}
          >
            {product.name}
          </div>
        ))
      )}
    </div>
  )}
</div>

 */}





        {/* Icons */}
        <div style={styles.icons} ref={cartRef}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button style={styles.loginButton}>
              <FaUserAlt style={{ marginRight: "5px" }} /> Login
            </button>
          </Link>

          <div style={styles.cartContainer} onClick={toggleCart}>
            <FaShoppingCart style={styles.cartIcon} />
            <span style={styles.cartBadge}>{number}</span>

            {isCartOpen && (
              <div style={styles.cartDropdown}>
                {cartItems.length === 0 ? (
                  <p style={styles.emptyCartText}>Your cart is empty.</p>
                ) : (
                  <>
                    {cartItems.map((item, index) => {
                      const imgSrc = images[item.image] || amul;

                      return (
                        <div key={index} style={styles.cartItem}>
                          <img
                            src={imgSrc}
                            alt={item.name}
                            style={styles.cartItemImage}
                          />
                          <div style={styles.cartItemDetails}>
                            <p style={styles.cartItemName}>{item.name}</p>
                            <p style={styles.cartItemQuantity}>
                              Qty: {item.quantity}
                            </p>
                            <p style={styles.cartItemPrice}>
                              {item.price}
                            </p>
                          </div>
                          <button
                            style={styles.removeButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(index);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })}

                    <div style={styles.totalContainer}>
                      <strong>Total:</strong> ₹{totalPrice.toFixed(2)}
                    </div>

                    <button
                      style={styles.checkoutButton}
                      onClick={() => {
                        navigate("/cart");
                        setIsCartOpen(false);
                      }}
                    >
                      Go to Cart
                    </button>

                    <button
                      style={{
                        ...styles.checkoutButton,
                        background: "#148b60",
                      }}
                      onClick={() => {
                        navigate("/checkout");
                        setIsCartOpen(false);
                      }}
                    >
                      Checkout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};


const styles = {
  header: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #eaeaea",
    padding: "10px 20px",
    width: "100%",
    boxSizing: "border-box",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1000",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },
  logoContainer: {
    flexShrink: 0,
  },
  logo: {
    height: "50px",
    width: "auto",
  },
  searchSection: {
    flex: "1 1 400px",
    display: "flex",
    alignItems: "center",
    background: "#f1f1f1",
    borderRadius: "4px",
    overflow: "hidden",
    paddingLeft: "10px",
  },
  searchIcon: {
    color: "#666",
    fontSize: "18px",
  },
  searchInput: {
    flex: "1",
    padding: "8px 10px",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "14px",
  },
  searchButton: {
    backgroundColor: "#1ba672",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flexShrink: 0,
    position: "relative",
  },
  loginButton: {
    backgroundColor: "#1ba672",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    cursor: "pointer",
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    fontSize: "24px",
    color: "#000",
  },
  cartBadge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    background: "red",
    color: "#fff",
    borderRadius: "50%",
    minWidth: "18px",
    height: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "bold",
  },
  cartDropdown: {
    position: "absolute",
    top: "40px",
    right: "0",
    width: "320px",
    maxHeight: "400px",
    overflowY: "auto",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "6px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    padding: "10px",
    zIndex: 2000,
  },
  emptyCartText: {
    textAlign: "center",
    color: "#666",
    padding: "20px 0",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  },
  cartItemImage: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },
  cartItemQuantity: {
    margin: "4px 0",
    fontSize: "13px",
    color: "#777",
  },
  cartItemPrice: {
    margin: 0,
    fontSize: "13px",
    color: "#1ba672",
    fontWeight: "bold",
  },
  removeButton: {
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    fontSize: "12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  totalContainer: {
    padding: "10px 0",
    textAlign: "right",
    fontSize: "14px",
    color: "#333",
  },
  checkoutButton: {
    marginTop: "10px",
    width: "100%",
    backgroundColor: "#1ba672",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
  },

  searchResults: {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  background: "#fff",
  border: "1px solid #ddd",
  borderTop: "none",
  zIndex: 2000,
  maxHeight: "200px",
  overflowY: "auto",
},

searchResultItem: {
  padding: "8px 12px",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
  fontSize: "14px",
},

};


export default Header;
