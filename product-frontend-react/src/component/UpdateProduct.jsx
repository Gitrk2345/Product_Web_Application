import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    mfg_date: "",
    exp_date: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProduct((old) => ({ ...old, [name]: value }));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getById/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const productUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/updateProduct/${id}`, product)
      .then((res) => {
        if (res.data) {
          alert("Product Updated Successfully");
          navigate("/dashboard");
        } else {
          alert("Product Not Found");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Update Product
        </h2>

        {/* Form */}
        <form onSubmit={productUpdate} className="space-y-6">
          {/* ID */}
          <div>
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product ID
            </label>
            <input
              type="number"
              name="id"
              value={id}
              readOnly
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 font-medium cursor-not-allowed"
            />
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={inputHandler}
              placeholder="Enter product name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={inputHandler}
              placeholder="Enter product category"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Quantity & Price in grid */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={inputHandler}
                placeholder="Enter quantity"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={inputHandler}
                placeholder="Enter price"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Dates in grid */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="mfg_date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Manufacturing Date
              </label>
              <input
                type="date"
                name="mfg_date"
                value={product.mfg_date}
                onChange={inputHandler}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="exp_date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expiry Date
              </label>
              <input
                type="date"
                name="exp_date"
                value={product.exp_date}
                onChange={inputHandler}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
