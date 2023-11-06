import Card from "../Card";
import "./Sellers.css";

// crear el typo en typescript con la información que se recibirá y renderizara en este componente
// recuerda que este sera un arreglo de productos donde los productos tienen la estructura que se
// presento anteriormente, este typo creado utilízalo para definir el type de los parámetros de entrada
// de este componente.

const Sellers = ({ products }) => {
  return (
    <section id="sellers">
      <div className="seller container">
        <h2>Top Sales</h2>
        <div className="best-seller">
          {/* luego de obtener los productos de nuestro backend y pasarlos al
          componente Sellers, utiliza el método map para iterar sobre cada
          producto y mostrar una tarjeta por cada uno de los productos
          para esto utiliza el componente `Card` que encuentras en la carpeta de 
          components */}
          acá se debe inyectar las tarjetas llamas desde la api
          <b>https://127.0.0.1:8080/products</b>
        </div>
      </div>
    </section>
  );
};

export default Sellers;
