const romanMap = new Map();

romanMap.set("I", 1);
romanMap.set("V", 5);
romanMap.set("X", 10);
romanMap.set("L", 50);
romanMap.set("C", 100);
romanMap.set("D", 500);
romanMap.set("M", 1000);

export function toDecimal(roman: string) {
  let result = 0;
  let previousValue = 0;
  let currentValue = 0;
  let multiplier = 1;

  for (let i = roman.length - 1; i >= 0; i--) {
    currentValue = romanMap.get(roman[i]);

    if (currentValue < previousValue) {
      multiplier = -1;
    }

    result += currentValue * multiplier;

    previousValue = currentValue;
    multiplier = 1;
  }

  return result;
}
