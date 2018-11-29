const calculateArea = (figure, a, b, h) =>
  ({
    square: a * b,
    circle: Math.PI * Math.pow(a, 2),
    trapeze: ((a + b) / 2) * h,
    "right triangle": 0.5 * a * b
  }[figure]);

console.log(calculateArea("square", 5, 5, 5));
