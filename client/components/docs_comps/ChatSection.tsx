"use client";

import ChatGenerateDocs from "./ChatGenerateDocs";

const ChatModeTogglePage = () => {
  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Shared background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3  -translate-x-1/2 rounded-full bg-primary/15 blur-[180px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-28">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Documentation Assistant
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Ask questions, generate docs, or explore your codebase
            intelligently.
          </p>
        </div>

        <ChatGenerateDocs />
      </div>
    </section>
  );
};

export default ChatModeTogglePage;
