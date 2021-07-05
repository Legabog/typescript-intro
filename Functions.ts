const createPassword = (name: string = "oleg", age: number | string = 24) =>
  `${name}${age}`;

const createPassword_1 = (name: string, age: number) => `${name}${age}`;

createPassword_1("oleg"); // error expected 2 args, got 1

const createPassword_2 = (name: string, age?: number) => `${name}${age}`;

createPassword_2("oleg"); // no error, because age? optional arg

const createSomething = (arg: string, ...otherArgs: Array<string>): string => {
  return `${arg}`;
};

// Void no returns or return undefined
// Never error, infinite loop

function myFunc(name: string): void {
  alert(`Welcome ${name}!`)
}

let f: (firstArg: string) => void

f = myFunc

