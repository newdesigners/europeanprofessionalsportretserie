import React from "react";

export function ButtonSmall({ text }) {
  return (
    <button className="font-poppins text-Phone/buttonsmall bg-primary text-white rounded-10px px-4 py-3 xl:text-Desktop/buttonsmall xl:px-6 hover:bg-white hover:text-primary hover:ring-primary hover:ring-2 hover:ring-inset">
      {text}
    </button>
  );
}
