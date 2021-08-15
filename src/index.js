const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // 10: .; 11: -
  let space = "**********";

  let chunks = []; // [10, 10, 10, 10]

  for (let i = 0; i <= expr.length - 10; i += 10) { // 
    chunks.push(expr.slice(i, i + 10));
  }

  let morseChunks = []; // "....", "."
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i]
      .replace(/00/g, "")
      .replace(/10/g, ".")
      .replace(/11/g, "-");
    morseChunks.push(chunk);
  }

  let words = [];
  for (let i = 0; i < morseChunks.length; i++) {
    let chunk = morseChunks[i];
    if (chunk === space) {
      words.push(" ");
      continue;
    }

    let letter = MORSE_TABLE[chunk];
    words.push(letter);
  }
  return words.join("");
}

module.exports = {
  decode,
};
