import React from "react";

const Header = ({ purchase, setPurchase }) => {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Our Available Player Here</h1>
      <div>
        <button
          onClick={() => setPurchase(true)}
          className={`btn rounded-l-3xl border-r-0 ${
            purchase ? "bg-yellow-300" : ""
          }`}
        >
          Available
        </button>
        <button
          onClick={() => setPurchase(false)}
          className={`btn rounded-r-3xl border-l-0 ${
            purchase ? "" : "bg-yellow-300"
          }`}
        >
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default Header;
