const logNumbersWithDelay = (n: number, delay: number) => {
  for (let i = 0; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};
// logNumbersWithDelay(5, 1000);

const logNumbersWithDelayPromise = async (n: number, delay: number) => {
  for (let i = 0; i <= n; i++) {
    console.log(i);
    await new Promise((res) => setTimeout(res, delay));
  }
};
logNumbersWithDelayPromise(5, 1000);
