import { inputRegex } from "./inputRegex"
import { describe, expect, it } from "vitest"

describe("Search bar", () => {
  it("Doesn't accept letters", () => {
    expect(inputRegex("aaa")).toBe("")
  })

  it("Doesn't accept special characters", () => {
    expect(inputRegex("-!@ ")).toBe("")
  })

  it("Returns empty string when empty string is given", () => {
    expect(inputRegex("")).toBe("")
  })
})
