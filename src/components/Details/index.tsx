// import placeholder from "../../assets/placeholder.png";

// dada la siguiente estructura de JSX agrega los estilos css necesarios para ver los detalles del
// producto, para que se vea como se presenta en la siguiente imagen

// crear el typo en typescript con la información que se recibirá y renderizara en este componente
// recuerda que este serán los parámetros de un producto que tiene la estructura que se
// presento anteriormente, este typo creado utilízalo para definir el type de los parámetros de entrada
// de este componente.

type Product = {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const Details = ({ title, price, category, description, image }: Product) => {
  // por ultimo agrega los valores del producto en el componente `Details`
  return (
    <section>
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            {/* <img src={placeholder} alt="" width="100%" id="image" /> */}
            <img src={image} alt="" width="100%" id="image" />
          </div>
          <div className="col-2">
            <p>
              Home /
              <span id="category">
                {/* acá debes colocar la categoría del producto */}
                {category}
              </span>
            </p>
            {/* <h1 id="title"> acá debes colocar el titulo del producto </h1>
            <h4 id="price"> acá debes colocar el precio del producto </h4> */}

            <h1 id="title"> {title}</h1>
            <h4 id="price"> {price} </h4>

            <input type="number" id="quantity" />
            <button className="btn" id="btn">
              Add To Cart
            </button>

            <h3>Product Details</h3>
            <br />
            {/* <p id="description">acá debes colocar los detalles del producto</p> */}
            <p id="description">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
