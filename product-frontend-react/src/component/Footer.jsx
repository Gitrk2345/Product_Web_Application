import React from "react";

function Footer({ children }) {
  return (
    <>
      <div>{children}</div>
      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="container mx-auto text-center space-y-4 px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Product Portal. All rights reserved.
          </p>
          <nav className="space-x-6">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
