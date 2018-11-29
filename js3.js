class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo() {
    return `
Name: ${this.name}
Age: ${this.age}
Birthday: ${this.dateOfBirth}`;
  }
}

class Employee extends Human {
  constructor(salary, department, ...props) {
    super(...props);
    this.salary = salary;
    this.department = department;
  }

  displayInfo() {
    let superInfo = super.displayInfo();
    return (superInfo += `
Salary: ${this.salary}
Department: ${this.department}
`);
  }
}

class Manager extends Employee {
  constructor(developersArr = []) {
    super();
    this.developersArr = developersArr;
    /**  Не уверен что это можно делать в конструкторе
     *   Устанавливаю менеджера для всех разрабочиков при инициализации
     *   И вообще получается циклическая ссылка если в менеджере содержаться обьекты разработчиков а у них ссылка на обьект-менеджер ?
     *   не лучше ли генерировать/получать массив обьектов-работников вне классов и с помощью методов обращаться к нему ?
     */
    for (let developer of this.developersArr) {
      developer.setManager(this);
    }
  }

  addDev(developer) {
    //     Добавляем разрабочика в массив подчиненных
    this.developersArr = [...this.developersArr, developer];
    //     Устанавливаем у разработчика этого менеджера
    developer.setManager(this);
  }

  removeDev(developer) {
    this.developersArr = this.developersArr.filter(item => item !== developer);
    developer.setManager();
  }
}

class Developer extends Employee {
  constructor(...props) {
    super(...props);
    this.manager = null;
  }

  setManager(manager = null) {
    this.manager = manager;
  }
}

const dev1 = new Developer(70000, "developer1", "Jack", 24, "1993.07.21");
const dev2 = new Developer(130000, "developer2", "Tom", 27, "1990.12.03");
const manager = new Manager([dev1]);
manager.addDev(dev2);
console.log(dev1);
manager.removeDev(dev2);
console.log(dev2);
