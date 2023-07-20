/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}
const GAP = " ";
/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich", "bin", "Max"], "S"));
output(getSentence(["Bist", "du", "Max"], "Q"));
output(getSentence(["Ich", "bin"], "E"));
output(
  getSentence(
    [
      "Ich",
      "hätt",
      "gern",
      "die",
      "Platt",
      "von",
      "dene",
      "zwei",
      "diwodaso",
      "Spass",
      "mache,",
      "habbe",
      "Sie",
      "die",
    ],
    "Q"
  )
);

function getSentence(arr, op) {
  addPunctuation(arr, op);
  let result = buildSentence(arr);
  return result;
}

function addPunctuation(arr, op) {
  switch (op) {
    case "Q":
      arr.push("?");
      break;
    case "S":
      arr.push(".");
      break;
    case "E":
      arr.push("!");
      break;
    default:
      break;
  }
}

function buildSentence(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      result += GAP + arr[i];
    } else result += arr[i];
  }
  return result.trim();
}

// Modul: Ausgabe in Konsole : Test
// output("hi");
function output(outputData) {
  console.log(outputData);
}
