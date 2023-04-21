/* Pseudocode the solution, writing your logic down in the IDE.
Turn your pseudocode into JavaScript logic.
Make checks with console.log.
Test with VS Code’s debugger.
Test with the browser debugger.
Write your solution in an alternative manner (ternary or single line if/else statements). */

/* Input Values	Expected Print
0	even
1	odd
5	odd
16	even
256	even
-5	odd
-5555555555555	odd */

const input = 1001; 

if (input % 2 == 1) {
    console.log("odd");
} else {
    console.log("even");
}
