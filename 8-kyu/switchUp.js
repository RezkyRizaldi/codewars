function switchItUp(number) {
  let num;
  switch (number) {
    case 1:
      num = "One";
      break;
    case 2:
      num = "Two";
      break;
    case 3:
      num = "Three";
      break;
    case 4:
      num = "Four";
      break;
    case 5:
      num = "Five";
      break;
    case 6:
      num = "Six";
      break;
    case 7:
      num = "Seven";
      break;
    case 8:
      num = "Eight";
      break;
    case 9:
      num = "Nine";
      break;
    default:
      num = "Zero";
      break;
  }

  return num;
}

//* Array
// function switchItUp(number) {
//   return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number];
// }

console.log(`Answer: ${switchItUp(1)}`, "Result: One");
console.log(`Answer: ${switchItUp(3)}`, "Result: Three");
console.log(`Answer: ${switchItUp(5)}`, "Result: Five");
