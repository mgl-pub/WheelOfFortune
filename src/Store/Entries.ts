import { reactive } from "vue";

export let entryNames = reactive([
  //List of entries
  "Entry 1",
  "Entry 2",
  "Entry 3",
  "Entry 4",
  "Entry 5",
  "Entry 6",
]);

export let entryResult = reactive([
  //List of results
  "Entry1",
  "Entry2",
  "Entry3",
  "Entry4",
  "Entry5",
  "Entry6",
])

export const entryColors = [
  // List of colors that are used to generate the wheel
  "#16A34A", //Green
  "#2563EB", //Blue
  "#7C3AED", //Purple
  "#DB2777", //Pink
  "#DC2626", //Red
  "#FACC15", //Yellow
];
