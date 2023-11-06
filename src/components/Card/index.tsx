// Ahora en el componente Card utiliza el componente `Link` expuesto por react-router-dom
// para dirigir al usuario a la ruta `/productDetails/:id` cuando el usuario de click
// en el botón de `Buy Now`
import { Link } from "react-router-dom";
import "./Card.css";

// crear el typo en typescript con la información que se recibirá y renderizara en este componente
// recuerda que este serán los parámetros de un producto que tiene la estructura que se
// presento anteriormente, este typo creado utilízalo para definir el type de los parámetros de entrada
// de este componente.

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const Card = ({ id, title, price, category, description, image }: Product) => {
  // dado el css en `Card.css` deduce la estructura del `TSX` de este componente para que se vea igual
  // a como se presenta en el gif donde debe tener las mismas animaciones on hover del elemento.
  return (
    <div className="card-product">
      <div className="card-img">
        <img src={image} alt="${title}" className="img-responsive" />
      </div>
      <div className="card-text">
        <div className="category">
          <span>{category}</span>
        </div>
        <div className="title-product">
          <h3>{title}</h3>
        </div>
        <div className="description-prod">
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <div className="footer-left">
            <span className="price">${price}</span>
          </div>
          <div className="footer-right">
            <div className="buy-now">
              <button>
                <Link to={`/productDetails/${id}`}>Buy Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
