// Ahora en el componente Card utiliza el componente `Link` expuesto por react-router-dom
// para dirigir al usuario a la ruta `/productDetails/:id` cuando el usuario de click
// en el botón de `Buy Now`
import { Link } from "react-router-dom";
import "./Card.css";

// crear el typo en typescript con la información que se recibirá y renderizara en este componente
// recuerda que este serán los parámetros de un producto que tiene la estructura que se
// presento anteriormente, este typo creado utilízalo para definir el type de los parámetros de entrada
// de este componente.

type Product = {};

const Card = ({ id, title, price, category, description, image }) => {
  // dado el css en `Card.css` deduce la estructura del `TSX` de este componente para que se vea igual
  // a como se presenta en el gif donde debe tener las mismas animaciones on hover del elemento.
  return <div className="card-product"></div>;
};

export default Card;
