import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-white text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white px-6 py-2 rounded-full text-sm font-semibold transition">
      {children}
    </button>
  );
}