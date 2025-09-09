import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products depending on search type
  const fetchProducts = () => {
    let url = "http://localhost:8080/getAllProducts";

    if (searchType === "id" && keyword) {
      url = `http://localhost:8080/getById/${keyword}`;
    } else if (searchType === "name" && keyword) {
      url = `http://localhost:8080/getByName/${keyword}`;
    } else if (searchType === "category" && keyword) {
      url = `http://localhost:8080/getByCategory/${keyword}`;
    }

    axios
      .get(url)
      .then((res) => {
        let data = res.data;


        if (!Array.isArray(data)) {
          data = data ? [data] : [];
        }

        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
        setProducts([]);
      });
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8080/deleteProduct/${id}`)
      .then((res) => {
        if (res.data) {
          alert("Product Deleted...");
          let updated = products.filter((prod) => id !== prod.id);
          setProducts(updated);
        } else {
          alert("Product not Exist..");
        }
      })
      .catch((error) => console.log(error));
  };

  const updateProduct = (id) => {
    navigate(`/updateProduct/${id}`);
  };

  return (
    <>
      <Header />

      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          📦 Products List
        </h2>

        {/* Search Controls */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="border px-3 py-2 rounded-lg shadow-sm"
          >
            <option value="all">All Products</option>
            <option value="id">By ID</option>
            <option value="name">By Name</option>
            <option value="category">By Category</option>
          </select>

          <input
            type="text"
            placeholder={`Search by ${searchType}`}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border px-3 py-2 rounded-lg w-64 shadow-sm"
          />

          <button
            onClick={fetchProducts}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            🔍 Search
          </button>

          <button
            onClick={() => {
              setKeyword("");
              setSearchType("all");
              fetchProducts();
            }}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-500 transition"
          >
            Reset
          </button>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-left">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Mfg Date</th>
                <th className="px-6 py-3">Exp Date</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((prod) => (
                <tr
                  key={prod.id}
                  className="odd:bg-gray-50 even:bg-gray-100 hover:bg-blue-50 transition duration-200"
                >
                  <td className="px-6 py-3 border-t">{prod.id}</td>
                  <td className="px-6 py-3 border-t font-medium text-gray-700">
                    {prod.name}
                  </td>
                  <td className="px-6 py-3 border-t">{prod.category}</td>
                  <td className="px-6 py-3 border-t">{prod.quantity}</td>
                  <td className="px-6 py-3 border-t text-green-600 font-semibold">
                    ₹{prod.price}
                  </td>
                  <td className="px-6 py-3 border-t">{prod.mfg_date}</td>
                  <td className="px-6 py-3 border-t">{prod.exp_date}</td>

                  <td className="px-6 py-3 border-t flex gap-3 justify-center">
                    <button
                      onClick={() => updateProduct(prod.id)}
                      className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 shadow-md transition"
                    >
                      ✏️ Update
                    </button>
                    <button
                      onClick={() => deleteProduct(prod.id)}
                      className="bg-red-600 text-white px-4 py-1.5 rounded-lg hover:bg-red-700 shadow-md transition"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No products found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
