const timer = (callbackMethodToTime) => {
  const timeStart = new Date();
  callbackMethodToTime();
  const timeEnd = new Date();
  console.log(timeEnd - timeStart);
};

let arr = [];

for (let i = 1; i < 1000000; i += 5000) {
  arr.push(Math.floor(Math.random() * 100000 + 1));
  console.log(arr);
  timer(() => arr.shuffle);
}

module.exports.timer = timer;
