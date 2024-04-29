// Tipado implicito
let nombre = "Meylin";
let edad = 21;

// Tipad o explicito
let usuario: string;
let codigoPostal: number;
let isLoading: boolean;
let arrString: string[];
let arrNumber: number[];
let arrBoolean: boolean[];

// !!! a SE DEBE OCUPAR NUNCA
let anything: any;
anything = "hola";
anything = [1, 2, 3, 4, true];
// !! PROHIBIDO

// autocompletado

// Tuplas
let rgba: [number, number, number, number];
rgba = [12, 4, 200, 0.6];

// Tipos literales
let respuestas: "De acuerdo" | "Medianamente de acuerdo" | "En desacuerdo";
respuestas = "Medianamente de acuerdo";

let puntaje: 0 | 1 | 2 | 3 | 4 | 5;
puntaje = 3;
const PI: 3.1416 = 3.1416;
let indefinido: undefined;
let nulo: null;

// Asignar varios tipos
let id: number | string;
id = 12;
id = "a43";

let arreglo: (string | boolean)[];
arreglo = [false, "hello", false];

// FUNCIONES::::::::::::::::::

function sumaTradicional(num1: number, num2: number): string {
  return `La suma de ${num1} y ${num2} es ${num1 + num2}`;
}
const sumaAnonima = function (num1: number, num2: number): string {
  return `La suma de ${num1} y ${num2} es ${num1 + num2}`;
};

const sumaFlecha = (num1: number, num2: number): string => {
  return `La suma de ${num1} y ${num2} es ${num1 + num2}`;
};
console.log(sumaFlecha(14, 17));

// Parametros opcionales::::::::::::::::::
// Los parametros opcionales, solo se pueden colocar al final
const sumarNumeros = (num1: number, num2: number, num3?: number): number => {
  return num1 + num2 + (num3 ? num3 : 0);
};

// Funciones que no retornen nada::::::::::
const sumarSinReturn = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

// Crear mis propieos tipos de datos:::::::
type numberString = number | string;
let uuid: numberString = "my world";

// OBJETOS::::::::::::::::::::::::::::::::::::
type User = {
  readonly name: string; //---- solo lectura
  age: number;
  isActive?: boolean; //----- opcional
  stackTech: string[];
};

let pepito: User = {
  name: "Pepe",
  age: 37,
  isActive: false,
  stackTech: ["you", "are", "not", "true"],
};

// Otra forma de tipar Objetos--->Interface
interface Usuario {
  readonly name: string; //---- solo lectura
  age: number;
  isActive?: boolean; //----- opcional
  stackTech: string[];
}

let ian: Usuario = {
  name: "Ian",
  age: 23,
  stackTech: ["HTML", "CSS", "JS"],
};
