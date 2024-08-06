export type TimerZone = {
  startTime: string
  endTime: string
}
export type Timer = {
  id: string
  name: string
  color: string
  zones: TimerZone[]
}
