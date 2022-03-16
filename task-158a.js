const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 2;
let counter = 0;
const rows = [];

readline.on("line", (line) => {
  counter++;
  rows.push(line);

  if (counter === count) {
    readline.close();

    main(rows);
  }
});

function main(rows) {
  const [_, index] = rows[0].split(" ").map(Number);

  const arr = rows[1].split(" ").map(Number);

  const edge = arr[index - 1];

  const count = arr.reduce((acc, val) => {
    return (acc += val >= edge && val > 0 ? 1 : 0);
  }, 0);

  console.log(count);
}
