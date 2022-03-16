const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  readline.close();

  main(input);
});

function main(input) {
  const [m, n , a] = input.split(' ').map(Number)

  const mMult = Math.ceil(m / a)
  const nMult = Math.ceil(n / a)

  const res = mMult * nMult
  console.log(res)
}
