import { create } from "zustand";
import { axiosClient } from "@/api/axiosClient";
import { toast } from "sonner";

type DocsStore = {
  uploading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  projectId: string | null;

  uploadProjectZip: (zipFile: File | null) => Promise<void>;
  resetDocsState: () => void;
};

export const useDocsStore = create<DocsStore>((set) => ({
  uploading: false,
  errorMessage: null,
  successMessage: null,
  projectId: null,

  uploadProjectZip: async (zipFile) => {
    try {
      if (!zipFile) {
        throw new Error("ZIP file is required");
      }

      set({
        uploading: true,
        errorMessage: null,
        successMessage: null,
      });

      const formData = new FormData();
      formData.append("file", zipFile);

      const res = await axiosClient.post("/projects/upload-zip", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const projectId = res.data?.meta?.project_id;

      if (!projectId) {
        throw new Error("Project ID missing in response");
      }

      localStorage.setItem("project_id", projectId);

      set({
        projectId,
        successMessage: res.data?.message || "Project uploaded successfully",
      });

      toast.success(res.data?.message || "Project uploaded successfully");
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to upload project ZIP";

      set({ errorMessage: message });
      toast.error(message);
      throw err;
    } finally {
      set({ uploading: false });
    }
  },

  resetDocsState: () => {
    set({
      uploading: false,
      errorMessage: null,
      successMessage: null,
      projectId: null,
    });
  },
}));
