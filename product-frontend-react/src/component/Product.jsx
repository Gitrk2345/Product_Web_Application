import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Product() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    mfg_date: "",
    exp_date: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProduct((old) => ({ ...old, [name]: value }));
  };

  const insertProduct = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/addProduct", {
        name: product.name,
        category: product.category,
        quantity: product.quantity,
        price: product.price,
        mfg_date: product.mfg_date,
        exp_date: product.exp_date, // ✅ fixed: exp_date should not be mfg_date
      })
      .then((res) => {
        if (res.data) {
          alert("Product Added Successfully..!");
          setProduct({
            name: "",
            category: "",
            quantity: "",
            price: "",
            mfg_date: "",
            exp_date: "",
          });
          navigate("/dashboard");
        } else {
          alert("Product Already added..");
        }
      })
      .catch(() => alert("Something Went Wrong!"));
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Add Product
          </h2>

          <form onSubmit={insertProduct} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={inputHandler}
                id="name"
                placeholder="Enter Product Name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                value={product.category}
                onChange={inputHandler}
                id="category"
                placeholder="Enter Product Category"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={inputHandler}
                id="quantity"
                placeholder="Enter Quantity"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={inputHandler}
                id="price"
                placeholder="Enter Product Price"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="mfg_date"
                className="block text-sm font-medium text-gray-700"
              >
                Manufacturing Date
              </label>
              <input
                type="date"
                name="mfg_date"
                value={product.mfg_date}
                onChange={inputHandler}
                id="mfg_date"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="exp_date"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date
              </label>
              <input
                type="date"
                name="exp_date"
                value={product.exp_date}
                onChange={inputHandler}
                id="exp_date"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Product;
