import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

interface Product {
  id: number;
  title: string;
  images: string[];
  price: string;
  variants: Variant[];
}

interface Variant {
  title: string;
  quantity: number;
}

function App() {
  const [ans, setAns] = useState<Product[]>([]);

  useEffect(() => {
    const { REACT_APP_API_URL } = process.env;
    fetch(`${REACT_APP_API_URL}`)
      .then((datos) => {
        return datos.json();
      })
      .then((resp: Product[]) => {
        console.log(resp);
        let firstTwo = resp.slice(0, 5);
        setAns(firstTwo);
      });
  }, []);

  return (
    <>
      <div className="App">
        <header className="fixed-header">
          <h1>Ecomm-Products</h1>
        </header>
        <div className="content">
          <Card answer={ans} />
        </div>
      </div>
    </>
  );
}

export default App;
