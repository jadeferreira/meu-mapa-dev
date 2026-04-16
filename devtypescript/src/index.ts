// Tipos Básicos
let age: number = 5;
const firstName: string = "Jade";
const isAdmin: boolean = true;

// Tipos Avançados - Arrays e Tuplas
let hobbies: string[] = ["Cozinhar", "Praticar Esportes"];
let role: [number, string] = [2, "author"];

// Lista de tuplas
const people: [number, string][] = [
  [1, "Jade"],
  [2, "Maria"],
  [3, "João"],
];

// Interseção
const productID: number | string | boolean = false;

// Enum
enum Directions {
  up = 1,
  down = 2,
  left = `esquerda`,
  right = `direita`,
}

// Type Assertions
const productName: any = "Notebook";
let itemId = <string>productName; // Passa a ser string
