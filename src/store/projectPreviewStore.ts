import { create } from 'zustand';

interface IPreviewProjectStore {
  project: IProjectFormPreview;
  setProject: (project: IProjectFormPreview) => void;
}

const useProjectPreviewStore = create<IPreviewProjectStore>(set => ({
  project: {} as IProjectFormPreview,
  setProject: (project: IProjectFormPreview) => set(() => ({ project })),
}));

export default useProjectPreviewStore;
