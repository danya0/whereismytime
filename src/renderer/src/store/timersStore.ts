import { create } from 'zustand'
import { Timer } from '../types/timerTypes'
import { uuid } from '../utils/uuid'

type TimersState = {
  selectedTimerId: string | null
  startedInterval: null | NodeJS.Timeout
  timers: Timer[]

  createInterval: (interval: NodeJS.Timeout) => void
  removeInterval: () => void
  addTimer: (timer: { name: string; color: string }) => Timer
  toggleTimer: (id: string | null) => void
  getById: (id: string) => Timer | undefined
}

export const useTimersStore = create<TimersState>((set, get) => ({
  selectedTimerId: null,
  startedInterval: null,
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
  createInterval(interval: NodeJS.Timeout): void {
    set(() => ({ startedInterval: interval }))
  },
  removeInterval(): void {
    set((state) => {
      if (state.startedInterval) {
        clearInterval(state.startedInterval)
      }
      return { startedInterval: null }
    })
  },
  toggleTimer(id: string | null): void {
    set(() => ({
      selectedTimerId: id
    }))
  },
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
