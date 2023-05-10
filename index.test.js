const calculator = require('./modules/calculator.js');
const capitalize = require('./modules/capitalize.js');
const { stringLength, reverseString } = require('./modules/index.js');


test('length of hey girl', () => {
    expect(stringLength("hey girl")).toBe(7);
});

test('empty string', () => {
    expect(stringLength(" ")).toBe("string length shouldn't be empty and more than 10");
});

test('empty string', () => {
  expect(stringLength("this is more than 10")).toBe("string length shouldn't be empty and more than 10");
});

test('reverse hello bello', () => {
  expect(reverseString("hello bello")).toBe("olleb olleh");
});

describe.each([
  [2, 4],
  [5,0]
])('Calculator', (a, b) => {
  const cal = new calculator();

  test('add two numbers', () => {
    expect(cal.add(a, b)).toBe(a + b);
  });

  test('subtract two numbers', () => {
    expect(cal.subtract(a, b)).toBe(a - b);
  });

  test('multiply two numbers', () => {
    expect(cal.multiply(a, b)).toBe(a * b);
  });

  test('divide two numbers', () => {
    if (b === 0) {
      expect(() => cal.divide(a, b)).toThrow('Cannot divide by zero');
    } else {
      expect(cal.divide(a, b)).toBe(a / b);
    }
  });
});

describe('capitalize',() => {
  test("return 1st letter capitalize",()=>{
    expect(capitalize("bravo")).toBe("Bravo")
  });
});