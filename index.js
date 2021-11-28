function tankvol(h, d, vt) {
  const lengthCal = (d, vt) => Math.ceil(vt / ((d / 2) ** 2 * Math.PI));
  const cylinderLength = lengthCal(d, vt);
  const radius = d / 2;

  console.log(cylinderLength);

  const leftSide = radius ** 2 * Math.cos((radius - h) / radius) ** -1;
  const rightSide = (radius - h) * Math.sqrt(2 * radius * h - h ** 2);
  const circleArea = leftSide - rightSide;
  return Math.floor(cylinderLength * circleArea);
}

console.log(tankvol(40, 120, 3500)); // 1021
console.log(tankvol(2, 7, 3848)); // 907
console.log(tankvol(5, 7, 3848)); // 2940
