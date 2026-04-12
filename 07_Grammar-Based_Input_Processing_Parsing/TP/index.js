function toNumberArray(number) {
  let result = [];
  if (typeof number === "string") {
    result = number.split(",");
  } else if (Array.isArray(number)) {
    result = number;
  }
  const numberArray = result.map(item => item.trim()).filter(item => item !== "").map(item => Number(item)).filter(angka => !Number.isNaN(angka));
  return numberArray;
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]