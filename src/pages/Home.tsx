import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PromoBar from "../components/PromoBar";
import Banner from "../components/Banner";
import Collection from "../components/Collection";
import Sellers from "../components/Sellers";
import News from "../components/News/Index";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const URL = "http://127.0.0.1:8080/product";

const Home = () => {
  // en el componente (pagina) Home usa el hook useEfFect para hacer el llamado de la data, esto unicamente en el montado del componente
  // que se utilizara en la sección de sellers, recuerda llamar de tu API, en la url http://127.0.0.1:8080/product
  // tu API debe estar encendida y corriendo localmente ademas de tener algunos productos iniciales para renderizar
  // para almacenar la información llamada en nuestra API usa el hook useState para almacenar en un estado
  // los productos obtenidos y pasarlos al componente `Sellers`

  return (
    <>
      <PromoBar />
      <NavBar />
      <Banner />
      <Collection />
      <Sellers products={products} />
      <News />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
