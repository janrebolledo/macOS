import React from "react";

export function Icon({ icon, windows }) {
  const { name, state } = icon;
  return (
    <div className="relative group">
      <div className="absolute opacity-0 group-hover:opacity-100 transition-all -top-12 bg-black/20 rounded-md backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid px-4 text-center left-1/2 -translate-x-1/2 whitespace-nowrap">
        {name}
      </div>
      <div className="w-12 h-12 bg-white rounded-md opacity-100 group-hover:opacity-80 transition-all" />
      {state != "closed" ? (
        <div
          className={`w-1 h-1 rounded-full absolute -bottom-3 left-1/2 -translate-x-1/2 ${
            state && "active" ? "bg-white" : "bg-white/50"
          }`}
        />
      ) : (
        ""
      )}
    </div>
  );
}
