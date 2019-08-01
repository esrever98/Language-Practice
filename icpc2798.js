// 백준 2798 - 블랙잭

let res = 0;
let N = 5;
let M = 21;

let arr = [5, 6, 7, 8, 9];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
            if (i != j && j != k && k != i) {
                let tmp = arr[i] + arr[j] + arr[k];
                if (tmp <= M && res < tmp) {
                    res = tmp;
                }
            }
        }
    }
}
console.log(res);