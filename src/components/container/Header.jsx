import React from "react";
import Badge from "../elements/Badge";

function Header() {
  return (
    <>
      <h1 className="text-blue-700 text-4xl font-bold text-center mt-36 ">Contact App</h1>
      <div className="flex justify-center items-center gap-2 mt-6"><Badge background="bg-blue-200" color="text-blue-700"   >Botostart</Badge> <span className="text-gray-700">| React.js Full Curse</span></div>
    </>
  );
}

export default Header;
