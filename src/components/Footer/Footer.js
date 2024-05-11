import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="column">
          <h3 className="footer-title">Policies</h3>
          <ul>
            <li>
              <Link to="/shipping">Shipping</Link>
            </li>
            <li>
              <Link to="/returns">Returns</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="footer-title">Support</h3>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/livechat">LiveChat</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="footer-title">Social</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2024 LoremShop</p>
      </div>
    </footer>
  );
};

export default Footer;
