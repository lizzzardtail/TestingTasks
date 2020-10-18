console.log('TASK 2');

const arr = [
  {x: 1, y: 1},
  {x: -1, y: -2},
  {x: 1, y: -1},
  {x: 0, y: 2},
  {x: 1, y: -2},
];
let b = [];
b = (arr.map((point) => Math.sqrt((0 - point.x)**2 + (0 - point.y)**2)));

console.log(b);
let circles = 0;
b = b.sort();
for(let i=0; i<b.length; i++){
  if(b[i]==b[i+1]) continue;
  else {
    circles++;
  }
}
console.log(`number of circles: ${circles}`);
