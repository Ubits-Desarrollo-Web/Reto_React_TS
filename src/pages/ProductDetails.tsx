import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PromoBar from "../components/PromoBar";
import Details from "../components/Details";
import Footer from "../components/Footer";
import More from "../components/More";

const URL = "http://127.0.0.1:8080/product";

type ParamsTypes = {
  id: string;
};

type Product = {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const ProductDetails = () => {
  // en el componente (pagina) `ProductDetails` usa el hook useEfFect para hacer el llamado del producto seleccionado,
  // unicamente en el montado del componente, para esto utiliza el hook `useParams` obtén el id de la ruta y utilízalo
  // para llamar unicamente los detalles del producto seleccionado
  //   ```js
  // GET 127.0.0.1:8080/product/:id;
  // ```;
  // luego utiliza el hook useState para guardar la información obtenida del producto y pásala como props al componente
  // **Details**
  // NOTA: debes crear un type para definir los parámetros que vas a recibir del hook useParams

  const { id } = useParams<ParamsTypes>();

  const [product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(URL + "/" + id);
      const data = await result.json();
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <PromoBar />
      <NavBar />
      <Details
        title={product.title}
        price={product.price}
        category={product.category}
        description={product.description}
        image={product.image}
      />
      <More />
      <Footer />
    </>
  );
};

export default ProductDetails;
