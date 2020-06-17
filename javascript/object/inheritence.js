class Vehicle {
  // constructor() { 여기 상위 클래스에만 constructor를 정의해야 한다.
  //   console.log('vehicle')
  // }
}

class Car extends Vehicle { // new 하면 상위 클래스의 constructor를 사용한다.
  constructor() { // 이걸 상위 하위 두 군데에 정의하면 에러가 발생한다.
    console.log('car');
  }

}

class SpeedBoat extends Vehicle {

}

// const car = new Car();

class Boat extends SpeedBoat, Car { // 에러가 발생한다. 다중 상속을 지원하지 않는다.

}

const boat = new Boat();
