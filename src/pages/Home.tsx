import { useState } from "react";
import { motion } from "framer-motion";

function HomeCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

import { Link } from "react-router-dom";

import homeData from "../data/home.json";

type Dex = {
  title: string;
  content: string;
};

export default function Home({ query, setQuery }: { query: string; setQuery: (q: string) => void }) {
  const filtered = (homeData as Dex[]).filter((d: Dex) =>
    d.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen text-gray-800 p-6">
      <div className="flex items-center justify-center w-full">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {filtered.map((dex: Dex, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to="/dex" className="block focus:outline-none">
                <HomeCard title={dex.title} content={dex.content} />
              </Link>
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
}