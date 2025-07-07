

// import amul from "../images/amul.png"
// import atta from "../images/atta.png"

const Footer = () => {
  return (
    
    <footer className="footer">
    <br/>
    <br/>
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Blinkit</h2>
          <p>Groceries delivered in minutes.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Partner with us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Download App</h4>
            <ul className="download-links">
              <li>
                <a href="#">
                  {/* <img src={amul.png} alt="Google Play" /> */}
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <img src={atta.png} alt="App Store" /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Blinkit. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
