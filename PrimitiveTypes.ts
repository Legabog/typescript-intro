// * Number *

let n1: number; // n1: number явно
let n2 = 10; // n2: number неявно

// -----

let binary: number = 0b101;
let octal: number = 0o5;
let decimal: number = 5;
let hex: number = 0x5;

// * String * 
let s1: string; // s1: string явно
let s2 = "string" // s2: string неявно
let s3: string = "String" // s3: string явно

// * Boolean *
let isV1Valid: boolean; // явно
let isV2Valid = false; // неявно

// * Symbol * 
let sym1: symbol; // явно
let sym2 = Symbol('animal'); // неявно

// * BigInt * 
let bigInt: bigint = BigInt(Number.MAX_VALUE) + BigInt(Number.MAX_VALUE);

// * Null *
let nu: null = null;
// null, указанный после оператора
// двоеточия, это имеющийся только в TypeScript псевдоним (alias) для
// глобального типа Null. В, то время как null, указанный после оператора
// присваивания, это единственное значение типа Null.

// * Undefined * 
let und: undefined = undefined;

// * Void * 
// Указывает на то, что функция ничего не возвращает или возвращает undefined
function func(a: number, b: number): void {
  let c = a + b
}

// * Never * 
// Указывает на то, что функция никогда не будет выполнена
function func_2(): never {
  throw new Error()
}

function func_3(): never {
  while(true) {}
}

// * Unknown * 
// Тип unknown и any совместим только с самим собой и типом any

class TypeSystem {
  static unknown: unknown;
 
  static any: any = TypeSystem.unknown; // Ok
  static number: number = TypeSystem.unknown; // Error
  static string: string = TypeSystem.unknown; // Error
  static boolean: boolean = TypeSystem.unknown; // Error
  static null: null = TypeSystem.unknown; // Error
  static undefined: undefined = TypeSystem.unknown; // Error
  static void: void = TypeSystem.unknown; // Error
  static never: never = TypeSystem.unknown; // Error
 }
 TypeSystem.unknown = TypeSystem.any; // Ok
 TypeSystem.unknown = TypeSystem.number; // Ok
 TypeSystem.unknown = TypeSystem.string; // Ok
 TypeSystem.unknown = TypeSystem.boolean; // Ok
 TypeSystem.unknown = TypeSystem.null; // Ok
 TypeSystem.unknown = TypeSystem.undefined; // Ok
 TypeSystem.unknown = TypeSystem.void; // Ok
 TypeSystem.unknown = TypeSystem.unknown; // Ok


