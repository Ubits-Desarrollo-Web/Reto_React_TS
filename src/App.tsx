import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// Ahora en el archivo App.tsx utiliza el método `createBrowserRouter`, para crear la ruta de Home
// el cual sera el componente `Home.tsx` que encuentras en la carpeta **pages**, ademas de esto agrega
// una ruta dinámica `productDetail/:id` la cual mostrara los detalles del producto seleccionado
// usando el componente `ProductDetails.tsx`

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "productDetails/:id",
    element: <ProductDetails />,
  },
]);

// luego en el componente App retorna el `RouterProvider` que contendrá el router creado con `createBrowserRouter`

function App() {
  // return <Home />;
  return <RouterProvider router={router} />;
}

export default App;
