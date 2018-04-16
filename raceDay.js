let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;
if (!registeredEarly) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly) {
  console.log('your num is ${raceNumber} and you will race at 9:30am.');
} else if (age > 18 || registeredEarly) {
  console.log('your num is ${raceNumber} and you will race at 11:00am.');
} else if (age < 18 && !registeredEarly) {
  console.log('your num is ${raceNumber} and you will race at 12:30pm.');
} else {
  console.log('Please see the registration desk.');
}