import clothing from "../../assets/clothing.webp";
import shoes from "../../assets/shoes.webp";
import access from "../../assets/access.webp";
import "./Collection.css";

const Collection = () => {
  return (
    <section id="collection">
      <div className="collections container">
        <div className="content">
          <img src={clothing} alt="img" />
          <div className="img-content">
            <p>Clothing Collections</p>
            <button>
              <a href="#sellers">SHOP NOW</a>
            </button>
          </div>
        </div>
        <div className="content">
          <img src={shoes} alt="img" />
          <div className="img-content">
            <p>Shoes Spring</p>
            <button>
              <a href="#sellers">SHOP NOW</a>
            </button>
          </div>
        </div>
        <div className="content">
          <img src={access} alt="img" />
          <div className="img-content">
            <p>Accessories</p>
            <button>
              <a href="#sellers">SHOP NOW</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
