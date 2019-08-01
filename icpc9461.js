// 백준 9461 - 파도반 수열

let arr = [];

arr[1] = 1;
arr[2] = 1;
arr[3] = 1;
arr[4] = 2;
arr[5] = 2;
for (let i = 6; i <= 100; i++) {
    arr[i] = arr[i - 1] + arr[i - 5];
}
console.log(arr[12]);