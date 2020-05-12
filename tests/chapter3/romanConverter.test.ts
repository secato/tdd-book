import * as romanConverter from "../../src/chapter3/RomanConverter";

describe("Roma converter module", () => {
  test("It should understand the symbol I", () => {
    let result = romanConverter.toDecimal("I");
    expect(result).toBe(1);
  });

  test("It should understand the symbol V", () => {
    expect(romanConverter.toDecimal("V")).toBe(5);
  });

  test("It should understand two symbols", () => {
    expect(romanConverter.toDecimal("II")).toBe(2);
  });

  test("It should understand two pair of symbols", () => {
    expect(romanConverter.toDecimal("XXII")).toBe(22);
  });

  test("It should understand IV", () => {
    expect(romanConverter.toDecimal("IV")).toBe(4);
  });

  test("It should understand IX", () => {
    expect(romanConverter.toDecimal("IX")).toBe(9);
  });

  test("It should understand XXIV", () => {
    expect(romanConverter.toDecimal("XXIV")).toBe(24);
  });
});
