// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

const user: User = {
  firstName: "Jade",
  age: 20,
  email: "",
  password: "",
  orders: [{ productId: "1", price: 1000 }],
};

const printLog = (message: string) => {};
printLog(user.password!); // Afirmando que password não é undefined

// Unions
type Author = {
  books: string[];
};

const author: Author & User = {
  books: ["Livro 1", "Livro 2"],
  firstName: "Jade",
  age: 20,
  email: "jade@example.com",
  orders: [],
};

// Interfaces
interface useInterface {
  readonly firstName: string; // Somente leitura
}

const userEmail: useInterface = {
  firstName: "Jade",
};
