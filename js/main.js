"use strict";

function tab(space) {
  let str = "";
  while (space-- > 0)
    str += " ";
  return str;
}

async function main() {
  // PRINT TAB(27)"DOORS"
  // 2 PRINT TAB(20)"CREATIVE COMPUTING"
  // 3 PRINT TAB(18)"MORRISTOWN, NEW JERSEY"

  print(tab(27) + "DOORS\n");
  print(tab(27) + "DOORS\n");

}
