import React from "react";
import Header from "./Header";

function Welcome() {
  return (
    <>
      <Header />

      <div className="w-full h-screen">
        <img
          src="/welcome page.jpg"
          alt="Product Portal"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}

export default Welcome;
