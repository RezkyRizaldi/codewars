function saleHotdogs(n) {
  // return n * (n >= 5 && n < 10 ? 95 : n >= 10 ? 90 : 100);

  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

console.log(`Answer: ${saleHotdogs(1)}`, `Result: ${100}`);
console.log(`Answer: ${saleHotdogs(4)}`, `Result: ${400}`);
console.log(`Answer: ${saleHotdogs(5)}`, `Result: ${475}`);
console.log(`Answer: ${saleHotdogs(9)}`, `Result: ${855}`);
console.log(`Answer: ${saleHotdogs(10)}`, `Result: ${900}`);
console.log(`Answer: ${saleHotdogs(100)}`, `Result: ${9000}`);
