export class LS {
  static getItem<T, S>(key: string, blank: S): T | S {
    const localItem = localStorage.getItem(key)
    return localItem ? JSON.parse(localItem) : blank
  }

  static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
