import React from "react";

export function ButtonLarge({ text }) {
  return (
    <button className="font-poppins text-Phone/buttonsmall bg-primary text-white rounded-10px px-10 py-4 xl:text-Desktop/buttonsmall xl:px-12  hover:bg-white hover:text-primary hover:ring-primary hover:ring-2 hover:ring-inset">
      {text}
    </button>
  );
}
