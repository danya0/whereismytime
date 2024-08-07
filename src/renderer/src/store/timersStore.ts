import { create } from 'zustand'
import { Timer, TimerZone } from '../types/timerTypes'
import { uuid } from '../utils/uuid'

type TimersState = {
  selectedTimerId: string | null
  startedInterval: null | NodeJS.Timeout
  startedDate: string | null
  seconds: number
  timers: Timer[]

  createInterval: (interval: NodeJS.Timeout) => void
  removeInterval: () => void
  addTimer: (timer: { name: string; color: string }) => Timer
  toggleTimer: (id: string | null) => void
  getById: (id: string) => Timer | undefined
  createZone: (timerId: string) => TimerZone
  incrementSeconds: () => void
  resetSeconds: () => void
}

export const useTimersStore = create<TimersState>((set, get) => ({
  selectedTimerId: null,
  startedInterval: null,
  startedDate: null,
  seconds: 0,
  timers: [
    {
      id: '111111111111111',
      color: 'orange',
      name: 'Super',
      zones: [{ startTime: '1', endTime: '2', totalTime: 44 }]
    },
    {
      id: '22222222222222222',
      color: 'lightblue',
      name: 'tic tac toe',
      zones: [{ startTime: '432432', endTime: '43243243243', totalTime: 444 }]
    },
    {
      id: '33333333333333333333',
      color: 'lightgreen',
      name: 'mario',
      zones: [{ startTime: '33432423', endTime: '4654654543543', totalTime: 2345 }]
    }
  ],
  createInterval(interval: NodeJS.Timeout): void {
    set(() => ({ startedInterval: interval, startedDate: Date.now().toString() }))
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
  },
  createZone: (timerId: string): TimerZone => {
    const zone: TimerZone = {
      startTime: get().startedDate || '1',
      endTime: Date.now().toString(),
      totalTime: get().seconds
    }
    const allTimers = get().timers
    const withEditedTimer = allTimers.map((timer) => {
      if (timer.id === timerId) {
        return {
          ...timer,
          zones: [...timer.zones, zone]
        }
      }
      return timer
    })

    set(() => ({ timers: withEditedTimer }))
    return zone
  },
  incrementSeconds: (): void => {
    set((state) => {
      console.log('state.seconds -> ', state.seconds)
      return { seconds: state.seconds + 1 }
    })
  },
  resetSeconds: (): void => {
    set(() => ({ seconds: 0 }))
  }
}))
