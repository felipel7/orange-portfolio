import { create } from 'zustand';

interface IPreviewProjectStore {
  project: IProjectFormPreview;
  setProject: (project: IProjectFormPreview) => void;
  clearProject: () => void;
}

const useProjectPreviewStore = create<IPreviewProjectStore>(set => ({
  project: {} as IProjectFormPreview,
  setProject: (project: IProjectFormPreview) => set(() => ({ project })),
  clearProject: () => set(() => ({ project: {} as IProjectFormPreview })),
}));

export default useProjectPreviewStore;
