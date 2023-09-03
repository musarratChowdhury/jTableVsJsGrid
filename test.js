console.time("test");
for (let i = 0; i < 1000000; i++) {
  for (let j = 0; j < 100; j++) {
    var x = i + j;
  }
}
console.timeEnd("test");
// test: 0.5ms
const { performance } = require("perf_hooks");
performance.mark("test");
