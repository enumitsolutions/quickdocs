import AnswerRenderer from "@/components/ask_comps/AnswerRenderer";
import AskSidebar from "@/components/ask_comps/AskSidebar";

const AskNowPage = () => {
  return (
    <div className="flex h-screen">
      <AskSidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <AnswerRenderer />
      </main>
    </div>
  );
};

export default AskNowPage;
