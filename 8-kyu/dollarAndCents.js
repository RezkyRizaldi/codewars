//* Number.toFixed()
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

//* Intl Object
// function formatMoney(amount) {
//   const usd = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//     useGrouping: false,
//   });

//   return usd.format(amount);
// }

console.log(`Answer: ${formatMoney(39.99)}`, "Result: $39.99", "That's not formatted the way we expected.");
