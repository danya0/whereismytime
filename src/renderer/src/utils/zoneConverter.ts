export class ZoneConverter {
  static fromSeconds(seconds: number): string {
    const days = Math.floor(seconds / (60 * 60 * 24))
    const hours = Math.floor(seconds / (60 * 60) - 24 * days)
    const minutes = Math.floor((seconds / 60) % 60)
    const totalSeconds = Math.floor(seconds % 60)

    const dayString = `${days}d`
    const hoursString = `${hours}h`
    const minutesString = `${minutes}m`
    const secondsString = `${totalSeconds}s`

    if (days) return `${dayString} ${hoursString} ${minutesString} ${secondsString}`
    if (hours) return `${hoursString} ${minutesString} ${secondsString}`
    if (minutes) return `${minutesString} ${secondsString}`
    if (totalSeconds) return `${secondsString}`
    return '0s'
  }

  // static fromLocalString(): void {}
}
