import React from "react";
import dexData from "../data/dex.json";
import { Link } from "react-router-dom";

export default function Dex() {
  return (
    <div className="text-gray-800 p-6">
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {dexData.map((dex: { title: string; content: string }, i: number) => (
            <Link
              key={i}
              to={`/dex/${dex.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="block focus:outline-none"
            >
              <div className="bg-white rounded-2xl shadow-md p-4">
                <h2 className="text-xl font-semibold mb-2">{dex.title}</h2>
                <p className="text-gray-600">{dex.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
