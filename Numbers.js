console.log('TASK 1');

let a = [];
let n = Number(prompt('Введите размер массива:'));
let m = Number(prompt('Введите длину подпоследовательности:'));
a[0] = Number(prompt('Введите элемент массива'))
let max = a[0];
let ind = 0;
for(let i=1; i<n; i++){
  a[i]=Number(prompt('Введите элемент массива'));
  if(a[i]>max){
    max = a[i];
    ind = i;
  }
}
let sum1 = max;
let sum2 = max;

for(i=1; i<=(m-1); i++){
  if(ind!=0){
    sum1+=a[ind+i];
    sum2+=a[ind-i];
  } else{
    sum1+=a[ind+i];
    sum2 = 0;
  }
}
let ans = (sum1>sum2) ? sum1 : sum2;
console.log(a);
console.log(`result: ${ans}`);
