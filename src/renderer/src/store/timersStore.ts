import { create } from 'zustand'
import { Timer } from '../types/timerTypes'

type TimersState = {
  timers: Timer[]
  addTimer: (timer: Timer) => void
  getById: (id: string) => Timer | undefined
}

export const useTimersStore = create<TimersState>((set, get) => ({
  timers: [
    {
      id: '1',
      color: 'orange',
      name: 'Super',
      zones: [{ startTime: '1', endTime: '2' }]
    },
    {
      id: 'jkjkj34534',
      color: 'lightblue',
      name: 'tic tac toe',
      zones: [{ startTime: '432432', endTime: '43243243243' }]
    }
  ],
  addTimer: (timer: Timer): void => {
    set((state) => ({ timers: [...state.timers, timer] }))
  },
  getById: (id: string): Timer | undefined => {
    return get().timers.find((item) => item.id === id)
  }
}))
