export type AskSection = {
  title: string;
  content: string;
};

export type AskAnswer = {
  type: string;
  sections: AskSection[];
};

export type AskMessage = {
  id: string;
  question: string;
  answer: AskAnswer;
  createdAt: number;
};
