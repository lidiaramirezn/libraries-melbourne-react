import { expect, describe, it } from "vitest"
import { convertTime } from "./convertTime"

describe("convertTime", (): void => {
  it('should be a function', () => {
    expect(typeof convertTime).toBe('function');
  })

  it('should throw error if not string as parameter', () => {
    expect(() => convertTime('')).toThrow('Parameter must not be empty')
  })

  it(convertTime, () => {
    let time = convertTime('18:00')
    expect(time).toBe('6:00pm')
  })
})
