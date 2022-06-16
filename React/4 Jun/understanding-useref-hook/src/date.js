const date = new Date();

const hours = date.getHours();

console.log(hours);

if (hours > 0 && hours < 12) {
  console.log("Morning");
} else if (hours > 12 && hours < 16) {
  console.log("Afternoon");
} else {
  console.log("Evening/Night");
}
