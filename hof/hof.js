function circleCircumfarance(radius) {
  return 2 * (3.14 * radius);
}

function areaOfCircle(radius) {
  return 3.14 * (radius * radius);
}

// const circum = circleCircumfarance(10);
// const area = areaOfCircle(10);

// console.log("circum", circum);
// console.log("area", area);

function circle(fucnArg, radius) {
  return fucnArg(radius);
}

const circum = circle(circleCircumfarance, 10);
const area = circle(areaOfCircle, 10);

console.log("circum", circum);
console.log("area", area);
