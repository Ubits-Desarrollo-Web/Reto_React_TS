import product1 from "../../assets/product-1.jpeg";
import product2 from "../../assets/product-2.jpeg";
import product3 from "../../assets/product-3.jpeg";
import product4 from "../../assets/product-4.jpeg";
import "./More.css";

const More = () => {
  return (
    <>
      <div className="small-container">
        <div className="row row-2">
          <h2>Related Products</h2>
          <p>View more</p>
        </div>
      </div>
      <div className="small-container">
        <div className="row">
          <div className="col-4">
            <img src={product1} alt="" />
            <h4>Red Printed T-shirt</h4>
            <p>$500</p>
          </div>

          <div className="col-4">
            <img src={product2} alt="" />
            <h4>Red Printed T-shirt</h4>
            <p>$500</p>
          </div>

          <div className="col-4">
            <img src={product3} alt="" />
            <h4>Red Printed T-shirt</h4>
            <p>$500</p>
          </div>

          <div className="col-4">
            <img src={product4} alt="" />
            <h4>Red Printed T-shirt</h4>
            <p>$500</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
