const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count;
let counter = 0;
const rows = [];

readline.on("line", (line) => {
  if (count === undefined) {
    count = +line;

    return;
  }

  counter++;
  rows.push(line);

  if (counter === count) {
    readline.close();

    main(rows);
  }
});

function main(rows) {
  const res = rows.reduce((acc, val) => {
    const count = val.split(" ").reduce((accInner, valInner) => {
      accInner += +valInner;
      return accInner;
    }, 0);

    acc += count > 1 ? 1 : 0;

    return acc;
  }, 0);

  console.log(res);
}
