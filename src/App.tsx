import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import Invoice from "./pages/Invoice";
import Customer from "./pages/Customer";
import Product from "./pages/Product";
import { useState } from "react";
import {
  Product as ProductType,
  product as initialProducts,
} from "./constants/products";
import {
  Customer as CustomerType,
  customer as initialCustomer,
} from "./constants/customer";
import Home from "./pages/Home";
function App() {
  const [products, setProducts] = useState<ProductType[]>(initialProducts);
  const [users, setUsers] = useState<CustomerType[]>(initialCustomer);
  const NotFound = () => {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  };
  return (
    <Container fluid className="mt-1">
      <div className="w-100">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/customer"
              element={<Customer setUsers={setUsers} users={users} />}
            />
            <Route
              path="/product"
              element={<Product addProduct={setProducts} products={products} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;
