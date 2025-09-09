import { Route, Routes } from "react-router-dom";
import Welcome from "./component/Welcome";
import Product from "./component/Product";
import Dashboard from "./component/Dashboard";
import UpdateProduct from "./component/UpdateProduct";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <>
    <Footer>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/updateProduct/:id" element={<UpdateProduct/>}></Route>
      </Routes>
      </Footer>

    </>
  );
}

export default App;
