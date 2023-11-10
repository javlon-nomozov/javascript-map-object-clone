const { MyMap } = require("./src/map");

const mm2 = new MyMap();
mm2.set(true, true);
mm2.set(false, false);
console.log(mm2.delete("true"));
console.log(mm2.entries());
console.log(mm2.data);
