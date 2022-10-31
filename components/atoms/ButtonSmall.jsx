import React from "react";
import Router, { useRouter } from "next/router";

export function ButtonSmall({ text, url }) {
  const router = useRouter();
  function handleClick() {
    event.preventDefault();
    if (url !== undefined) {
      router.push({ pathname: url }).catch((e) => e);
    }
  }
  return (
    <button
      onClick={handleClick}
      className="font-poppins text-Phone/buttonsmall bg-primary text-white rounded-10px px-4 py-3 lg:text-Desktop/buttonsmall lg:px-6 hover:bg-white hover:text-primary hover:ring-primary hover:ring-2 hover:ring-inset"
    >
      {text}
    </button>
  );
}
