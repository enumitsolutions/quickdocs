import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  title: string;
  content: string;
};

const SectionCard = ({ title, content }: Props) => {
  return (
    <Card>
      <CardHeader className="font-semibold">{title}</CardHeader>
      <CardContent className="prose prose-sm max-w-none whitespace-pre-line">
        {content}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
