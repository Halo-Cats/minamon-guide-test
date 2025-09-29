import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  content: string;
};

export default function DexCard({ title, content }: Props) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
}
