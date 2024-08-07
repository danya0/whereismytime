import { create } from 'zustand'
import { Timer, TimerZone } from '../types/timerTypes'
import { uuid } from '../utils/uuid'
import { LS } from '../utils/ls'

type TimersState = {
  //variables
  selectedTimerId: string | null
  startedInterval: null | NodeJS.Timeout
  startedDate: string | null
  seconds: number
  timers: Timer[]

  //getter
  getById: (id: string) => Timer | undefined
  getTotalZonesTime: (id: string) => number

  //methods
  createInterval: (interval: NodeJS.Timeout) => void
  removeInterval: () => void
  addTimer: (timer: { name: string; color: string }) => Timer
  toggleTimer: (id: string | null) => void
  incrementSeconds: () => void
  resetSeconds: () => void

  createZone: (timerId: string) => TimerZone

  updateLocal: () => void
}

export const useTimersStore = create<TimersState>((set, get) => ({
  selectedTimerId: null,
  startedInterval: null,
  startedDate: null,
  seconds: 0,
  timers: LS.getItem<Timer[], Timer[]>('timers', []),
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

    get().updateLocal()
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
    get().updateLocal()
    return zone
  },
  incrementSeconds: (): void => {
    set((state) => {
      return { seconds: state.seconds + 1 }
    })
  },
  resetSeconds: (): void => {
    set(() => ({ seconds: 0 }))
  },
  getTotalZonesTime: (id: string): number => {
    const currentTimer = get().timers.find((timer) => timer.id === id)
    if (!currentTimer) return 0

    return currentTimer.zones.reduce((acc: number, zone: TimerZone) => {
      return acc + zone.totalTime
    }, 0)
  },
  updateLocal: (): void => {
    const timers = get().timers
    LS.setItem('timers', timers)
  }
}))
