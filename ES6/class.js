class Car {
  // 원본, 틀
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year;
  }
  drive() {
    console.log("부릉부릉");
  }
}

const avante = new Car({
  name: "아반떼",
  price: 2500,
  year: 2019
});

const morning = new Car({
  name: "모닝",
  price: 1200,
  year: 2019
});

// avante.drive();
// morning.drive();

class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
  }
}

const 피카츄 = new Monster({ name: "피카츄" });
console.log(피카츄.health);

class Dinosaur extends Monster {
  constructor(options) {
    super(options);
  }
  몸통박치기(monster) {
    monster.health -= 10;
  }
}

const Tirano = new Dinosaur({ name: "Tirano" });
Tirano.몸통박치기(피카츄);
console.log(피카츄.health);
