const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count;
let counter = 0;
const words = [];

readline.on("line", (line) => {
  if (count === undefined) {
    count = +line;

    return;
  }

  counter++;
  words.push(line);

  if (counter === count) {
    readline.close();

    main(words);
  }
});

function main(words) {
  words.forEach((word) => {
    console.log(convert(word));
  });
}

function convert(word) {
  if (word.length <= 10) return word;

  return word[0] + word.slice(1, -1).length + word[word.length - 1];
}
