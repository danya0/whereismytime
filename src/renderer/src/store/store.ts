import { create } from 'zustand'

type BearsState = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
  updateBears: (newBears: number) => void
}

export const useStore = create<BearsState>((set) => ({
  bears: 0,
  increasePopulation: (): void => {
    set((state) => ({ bears: state.bears + 1 }))
  },
  removeAllBears: (): void => set({ bears: 0 }),
  updateBears: (newBears): void => set({ bears: newBears })
}))
