const { MyMap } = require("./src/map");

console.log();
console.log();

const mm2 = new MyMap();
console.log(mm2.set(true, true));
console.log(mm2.set(false, false));
console.log(mm2.delete("true"));
console.log(mm2.entries());
console.log(mm2.data);

console.log();
console.log();

const mm = new Map();
console.log(mm.set(true, true));
console.log(mm.set(false, false));
console.log(mm.delete("true"));
console.log(mm.entries());
console.log(mm.data);
