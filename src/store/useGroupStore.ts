import { create } from 'zustand';

interface GroupData {
  nome?: string;
  descricao?: string;
  idCategoria?: string;
  tipoDivisao?: number;
  participantes?: string[];
}

interface GroupState {
  groupData: GroupData;
  setGroupData: (data: GroupData) => void;
  removeGroupData: () => void;
}

export const useGroupStore = create<GroupState>((set) => ({
  groupData: {},

  setGroupData: (data) => set((state) => ({
    groupData: { ...state.groupData, ...data }
  })),
  removeGroupData: () => set({ groupData: {} }),
}));