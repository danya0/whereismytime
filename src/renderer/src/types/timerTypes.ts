export type TimerZone = {
  startTime: string
  endTime: string
  totalTime: number
}
export type Timer = {
  id: string
  name: string
  color: string
  zones: TimerZone[]
}
