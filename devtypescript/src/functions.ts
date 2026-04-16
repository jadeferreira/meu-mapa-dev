// const sum = (x: number, y: number): string => {
//     return (x + y).toString();
// };

interface MathFunc {
  (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const value = sum(5, 10);

const log = (message: string): void => {
  console.log(message);
};
