import { fileLoader } from "./fileloader.js";
import day10_1 from "./solutions/day10_1/index.js";
import day10_2 from "./solutions/day10_2/index.js";
import day11_1 from "./solutions/day11_1/index.js";
import day11_2 from "./solutions/day11_2/index.js";
var args = process.argv.slice(2);
if (args[0] === "--inspect") {
  args = args.slice(1);
}

let solutions = { day10_1, day10_2, day11_1, day11_2 };

console.log(args);

if (args[1] == "test") {
  var file = `./solutions/${args[0]}/test-input.txt`;
} else {
  var file = `./solutions/${args[0]}/input.txt`;
}

let sol = solutions[args[0]].solve(fileLoader.loadFile(file));
console.log(sol);
