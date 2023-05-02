const numRows = 10;
const numCols = 21;
let tree = '';

for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numCols; j++) {
    if (j < numCols / 2 - i || j > numCols / 2 + i) {
      tree += ' ';
    } else {
      tree += '*';
    }
  }
  tree += '\n';
}

console.log(tree);