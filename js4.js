function* gen() {
  let obj = {
    name: yield,
    age: yield
  };
  console.log(obj);
}

let generator = gen();

generator.next();
generator.next(prompt("Как вас зовут ?", "Ivan"));
generator.next(prompt("Сколько вам ?", 27));
