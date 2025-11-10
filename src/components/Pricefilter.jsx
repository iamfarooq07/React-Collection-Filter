import React from "react";

function Pricefilter() {
  return (
    <div className="shadow-2xl p-8 rounded border-2 mt-2 border-white">
      <input
        type="range"
        className="w-40 h-10 text-lg border border-gray-400 rounded"
      />
    </div>
  );
}

export default Pricefilter;
