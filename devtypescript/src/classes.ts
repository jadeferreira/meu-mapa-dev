interface IPerson {
  id: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string; // Somente a classe e suas subclasses podem acessar
  private age: number; // Somente a classe pode acessar

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return `Meu nome é ${this.name} e tenho ${this.age} anos.`;
  }
}

// Mesma coisa que acima. Modificadores de acesso são definidos diretamente no construtor.
class PersonRefact{
    constructor(
        readonly id: number,
        protected name: string,
        private age: number
    ){}
        sayMyName(): string {
        return `Meu nome é ${this.name} e tenho ${this.age} anos.`;
    }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI(){
    return this.name; // Acessando a propriedade protegida da classe pai
  }
}

const jade = new Person(1, "Jade", 20);
const employee = new Employee(2, "John", 30);
