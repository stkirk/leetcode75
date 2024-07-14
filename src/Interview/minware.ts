const x = 2;
let y = 4;
export function update(arg: number) {
  return Math.random() + y * arg;
}
y = 2;
y = 3; // ? line solution
const result = update(x);
console.log({ result });
