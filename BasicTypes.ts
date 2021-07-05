// Number Type
const num: number = 10;
// String Type
const str: string = "Oleg";
// Boolean Type
let isTrue: boolean = false;
isTrue = true;
// isTrue = 42 error
// isTrue = "asd" error
// null
const n: null = null;
// undefined
const u: undefined = undefined;
// Void
const someFunc = (): void => {
  console.log("I'm not returning some value. I'm void.");
};
// Array Type
let num_list: number[] = [1, 2, 3];
let str_list: string[] = ["A", "B", "C"];
// Generic type
let list: Array<number> = [1, 2, 3];
// Tuple Type
let y: [string, number] = ["sad", 12];
// Any Type
let z: Array<any> = [10, "ASD"];
let bol: any = false;
// no error, because any type
bol = 12;
bol = "ASD";
// Enum Type
enum Directions {
  Up,
  Down,
  Left,
  Right,
}
Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3
// Custom indexes
enum DirectionsCustom {
  Up = 2,
  Down = 4,
  Left = 6,
  Right,
}
DirectionsCustom.Up; // 2
DirectionsCustom.Down; // 4
DirectionsCustom.Left; // 6
DirectionsCustom.Right; // 7
// Never Type
const func = (): never => {
  while (true) {}
}; // infinite loop
const funcError = (msg: string): never => {
  throw new Error(msg);
}; // infinite loop
// Object Type
const someF = (o: object | null): void => {};

someF(1); // error
someF({ a: 1 });

// Type

type Name = string;

let id: Name;
id = 10; // error
id = "w";

// Interface
interface User {
  name: string,
  id: number
}

const user: User = {
  name: "Oleg",
  id: 0
}

// With classes

interface DefaultUser {
  name: string;
  surname: string;
  id: number;
}

class UserClass {
  name: string;
  surname: string;
  id: number;

  constructor(name: string, surname: string, id: number) {
    this.name = name;
    this.surname = surname;
    this.id = id
  }
}

const classuser: User = new UserClass("Oleg", "Dosov", 13)

// Composing Types

type MyOwnBool = true | false
type WindowState = "open" | "closed" | "minimized"

function getLength(str: string | string[]) {
  return str.length
}