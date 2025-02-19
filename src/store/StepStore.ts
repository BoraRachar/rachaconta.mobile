import { create } from 'zustand'
import { Step } from '../interfaces/types'

export const useStepStore = create<Step>((set) => ({
  step: 1,
  increaseStep: () => set((state) => ({ step: state.step + 1 })),
  decreaseStep: () => set((state) => ({ step: state.step - 1 })),
}))
