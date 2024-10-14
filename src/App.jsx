import { useState, useEffect } from "react";
import "./App.css";
import PList from "../components/PList.jsx";
import { Row, Col } from "react-bootstrap"; // Make sure to import Row and Col

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>  
            
      <nav class="nav nav-tabs bg-secondary-subtle ">
        
        <a class="nav-link " href="#">
          Active
        </a>
        <a class="nav-link" href="#">
          Link
        </a>
        <a class="nav-link" href="#">
          Link
        </a>
        <a class="nav-link " href="#">
          Disabled
        </a>
        
      </nav>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading products!</p>}
      <Row className="g-4 p-4 ">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <PList
              title={product.title}
              thumbnail={product.thumbnail}
              des={product.description}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default App;
