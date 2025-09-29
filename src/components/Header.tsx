import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type HeaderProps = {
  query: string;
  setQuery: (q: string) => void;
};

export default function Header({ query, setQuery }: HeaderProps) {
  return (
    <header className="max-w-4xl mx-auto mb-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
  <Link to="/">Minamon Guide</Link>
      </motion.h1>
      {/*
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <Input
          placeholder="Search dex..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button variant="secondary">
          <Search size={18} />
        </Button>
      </div>
      */}
    </header>
  );
}