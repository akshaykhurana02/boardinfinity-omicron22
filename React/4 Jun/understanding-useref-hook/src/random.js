const number = Math.ceil(Math.random() * 10);

console.log("Number -> ", number);

switch (number) {
  case 1:
    console.log("ABC");
    break;
  case 2:
    console.log("DEF");
    break;
  case 3:
    console.log("XYZ");
    break;
  default:
    console.log("Default");
    break;
}
