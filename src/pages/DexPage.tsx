import React from "react";
import { useParams } from "react-router-dom";
import dexData from "../data/dex.json";
import { Card, CardContent } from "@/components/ui/card";

export default function DexPage() {
  const { title } = useParams<{ title: string }>();
  const dex = dexData.find(
    (d) => d.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  if (!dex) {
    return (
      <div className="text-gray-800 p-6">
        <div className="flex items-center justify-center w-full">
          <div className="p-8 text-center">Dex not found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-gray-800 p-6">
      <div className="flex items-center justify-center w-full">
        <Card className="max-w-xl w-full">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4">{dex.title}</h1>
            <p>{dex.content}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
