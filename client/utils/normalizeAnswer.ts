type RawAnswer =
  | {
      sections: { title: string; content: string }[];
    }
  | Record<string, string>;

export type NormalizedSection = {
  title: string;
  content: string;
};

export const normalizeAnswer = (answer: RawAnswer): NormalizedSection[] => {
  // Case 1: already structured
  if ("sections" in answer && Array.isArray(answer.sections)) {
    return answer.sections;
  }

  // Case 2: key-value object response
  return Object.entries(answer).map(([key, value]) => ({
    title: key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    content: value,
  }));
};
