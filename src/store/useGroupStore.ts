import { create } from 'zustand';

interface GroupData {
  nome?: string;
  descricao?: string;
  idCategoria?: string;
  participantes?: string[];
}

interface GroupState {
  groupData: GroupData;
  setGroupData: (data: Partial<GroupData>) => void;
  removeGroupData: () => void;
}

export const useGroupStore = create<GroupState>((set) => ({
  groupData: {},

  setGroupData: (data) => set({ groupData: data }),
  removeGroupData: () => set({ groupData: {} }),
}));