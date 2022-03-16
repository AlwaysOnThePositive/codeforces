const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  readline.close();

  main(input);
});

function main(input) {
  const numInput = +input;
  const res = numInput % 2 === 0 && numInput >= 4 ? "YES" : "NO";
  console.log(res);
}
