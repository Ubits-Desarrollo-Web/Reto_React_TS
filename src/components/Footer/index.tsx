import ubits from "../../assets/ubits.png";
import cards from "../../assets/cards.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="content_1">
          <img src={ubits} alt="logo" />
          <p>
            The customer is at the heart of our
            <br />
            unique business model, which includes
            <br />
            design.
          </p>
          <img src={cards} alt="cards" />
        </div>
        <div className="content_2">
          <h4>SHOPPING</h4>
          <a href="#sellers">Clothing Store</a>
          <a href="#sellers">Trending Shoes</a>
          <a href="#sellers">Accessories</a>
          <a href="#sellers">Sale</a>
        </div>
        <div className="content_3">
          <h4>SHOPPING</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank">
            Payment Method
          </a>
          <a href="https://delivery-status-sb.netlify.app/" target="_blank">
            Delivery
          </a>
          <a
            href="https://codepen.io/sandeshbodake/full/Jexxrv"
            target="_blank"
          >
            Return and Exchange
          </a>
        </div>
        <div className="content_4">
          <h4>NEWLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, look books, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
