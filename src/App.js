import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { ProductList } from "./components/ProductList";

//Product data details
export const INITIAL_PRODUCT_LIST = [
  {
    name: "Fancy Product",
    poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00 - $80.00",
    oldPrice: "",
    review: "",
    sale: "",
  },
  {
    name: "Special Item",
    poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: " $18.00",
    oldPrice: "$20.00",
    review: "⭐⭐⭐⭐⭐",
    sale: "Sale",
  },
  {
    name: "Sale Item",
    poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$25.00",
    oldPrice: "$50.00",
    review: "",
    sale: "Sale",
  },
  {
    name: "Popular Item",
    poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00",
    oldPrice: "",
    review: "⭐⭐⭐⭐⭐",
    sale: "",
  },
  {
    name: "Sale Item",
    poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$25.00",
    oldPrice: "$50.00",
    review: "",
    sale: "Sale",
  },
  {
    name: "Fancy Product",
    poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$120.00 - $280.00",
    oldPrice: "",
    review: "",
    sale: "Sale",
  },
  {
    name: " Special Item",
    poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: " $18.00",
    oldPrice: "$20.00",
    review: "⭐⭐⭐⭐⭐",
    sale: "Sale",
  },
  {
    name: "Popular Item",
    poster: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00",
    oldPrice: "",
    review: "⭐⭐⭐⭐⭐",
    sale: "",
  },
];

function App() {
// lifting the state up 
// Intitializing cart value to 0 using useState
const [cart, setCart] = useState(0);
  return (
    <div className="App">
      {/* Navigation bar*/}
      <Navigation cart={cart}/>
      {/* Header section */}
      <Header />
      <ProductList cart={cart} setCart={setCart}/>
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
