import { create } from 'zustand'
import { Timer } from '../types/timerTypes'
import { uuid } from '../utils/uuid'

type TimersState = {
  timers: Timer[]
  addTimer: (timer: { name: string; color: string }) => Timer
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
  addTimer: ({ name, color }: { name: string; color: string }): Timer => {
    const timer: Timer = { name: name, color: color, zones: [], id: uuid() }
    set((state) => {
      return {
        timers: [...state.timers, timer]
      }
    })
    return timer
  },
  getById: (id: string): Timer | undefined => {
    return get().timers.find((item) => item.id === id)
  }
}))
