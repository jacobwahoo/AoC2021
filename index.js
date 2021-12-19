import { fileLoader } from "./fileloader.js";
import day10_1 from "./solutions/day10_1/index.js";
import day10_2 from "./solutions/day10_2/index.js";
import day11_1 from "./solutions/day11_1/index.js";
import day11_2 from "./solutions/day11_2/index.js";
import day12_1 from "./solutions/day12_1/index.js";
import day12_2 from "./solutions/day12_2/index.js";
import day13_1 from "./solutions/day13_1/index.js";
import day13_2 from "./solutions/day13_2/index.js";
import day14_1 from "./solutions/day14_1/index.js";
import day14_2 from "./solutions/day14_2/index.js";
import day15_1 from "./solutions/day15_1/index.js";
import day15_2 from "./solutions/day15_2/index.js";
import day16_1 from "./solutions/day16_1/index.js";
import day16_2 from "./solutions/day16_2/index.js";
import day17_1 from "./solutions/day17_1/index.js";
import day17_2 from "./solutions/day17_2/index.js";
import day18_1 from "./solutions/day18_1/index.js";
import day18_2 from "./solutions/day18_2/index.js";

var args = process.argv.slice(2);
if (args[0] === "--inspect") {
  args = args.slice(1);
}

let solutions = {
  day10_1,
  day10_2,
  day11_1,
  day11_2,
  day12_1,
  day12_2,
  day13_1,
  day13_2,
  day14_1,
  day14_2,
  day15_1,
  day15_2,
  day16_1,
  day16_2,
  day17_1,
  day17_2,
  day18_1,
  day18_2,
};

if (args[1] == "test") {
  var file = `./solutions/${args[0]}/test-input.txt`;
} else {
  var file = `./solutions/${args[0]}/input.txt`;
}

let sol = solutions[args[0]].solve(fileLoader.loadFile(file));
console.log(sol);
