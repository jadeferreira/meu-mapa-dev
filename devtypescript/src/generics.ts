const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("Hello, TypeScript!");

const numberValue = returnValue<number>(42);

function getFirstValueFromArray<T>(array: T[]): T {
    return array[0];
}

const firstString = getFirstValueFromArray<string>(["a", "b", "c"]);
const firstNumber = getFirstValueFromArray<number>([1, 2, 3]);

// Promises
const returnPromise = async (): Promise<string> => {
    return "Hello, Async!";
}

// CLasses
class GenericNumber<T>{
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(
    0, // zeroValue
    (x: number, y: number) => { // sum
        return x + y;
        
    }
);