import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DexPage from "./pages/DexPage";
import Dex from "./pages/Dex";
import Header from "./components/Header";
import React from "react";

export default function App() {
  const [query, setQuery] = React.useState("");
  return (
    <BrowserRouter>
      <div className="min-h-screen text-gray-800 p-6">
        <Header query={query} setQuery={setQuery} />
        <Routes>
          <Route path="/" element={<Home query={query} setQuery={setQuery} />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/dex/:title" element={<DexPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}