import { create } from 'zustand';

interface IPreviewProjectStore {
  previewProject: PreviewProject;
  setPreviewProject: (project: PreviewProject) => void;
  clearPreview: () => void;
}

const usePreviewProjectStore = create<IPreviewProjectStore>(set => ({
  previewProject: {} as PreviewProject,
  setPreviewProject: (project: PreviewProject) =>
    set(() => ({ previewProject: project })),
  clearPreview: () => set(() => ({ previewProject: {} as PreviewProject })),
}));

export default usePreviewProjectStore;
