import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide">Product Portal</h1>
        <nav className="space-x-6">
          <a
            href="/dashboard"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Dashboard
          </a>
          <a
            href="/product"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Product
          </a>
          <a
            href="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Welcome
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
