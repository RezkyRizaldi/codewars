class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

console.log(`Answer: ${Kata.getVolumeOfCuboid(1, 2, 2)}`, `Result: ${4}`);
console.log(`Answer: ${Kata.getVolumeOfCuboid(6.3, 2, 5)}`, `Result: ${63}`);
