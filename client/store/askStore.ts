import { create } from "zustand";
import { axiosClient } from "@/api/axiosClient";
import { AskMessage } from "@/types/askType";

type AskStore = {
  asking: boolean;
  error: string | null;
  messages: AskMessage[];

  ask: (params: { projectId?: string; question: string }) => Promise<void>;

  clearMessages: () => void;
};

export const useAskStore = create<AskStore>((set) => ({
  asking: false,
  error: null,
  messages: [],

  ask: async ({ projectId, question }) => {
    try {
      const resolvedProjectId = projectId || localStorage.getItem("project_id");

      if (!resolvedProjectId) {
        throw new Error("Project ID is required");
      }

      set({ asking: true, error: null });

      const res = await axiosClient.post(`/projects/${resolvedProjectId}/ask`, {
        question,
      });

      set((state) => ({
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            question,
            answer: res.data.answer,
            createdAt: Date.now(),
          },
        ],
        asking: false,
      }));
    } catch (err: any) {
      set({
        asking: false,
        error:
          err?.response?.data?.message ||
          err?.message ||
          "Failed to ask question",
      });

      throw err;
    }
  },

  clearMessages: () => {
    set({ messages: [], error: null });
  },
}));
