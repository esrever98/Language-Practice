// icpc 1018번 - 체스판 다시 칠하기

let N = 10;
let M = 13;
let MAP = [
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'W', 'B', 'W', 'B'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'W', 'B'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'W', 'B']
];

function Min(x, y) { return x < y ? x : y; };

function white(x, y) {

    let Cnt = 0;

    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            if (i == x || i == x + 2 || i == x + 4 || i == x + 6) {
                if (j == y || j == y + 2 || j == y + 4 || j == y + 6) {
                    if (MAP[i][j] != 'W') Cnt++;
                } else {
                    if (MAP[i][j] != 'B') Cnt++;
                }
            } else {
                if (j == y || j == y + 2 || j == y + 4 || j == y + 6) {
                    if (MAP[i][j] != 'B') Cnt++;
                } else {
                    if (MAP[i][j] != 'W') Cnt++;
                }
            }
        }
    }
    return Cnt;
}

function black(x, y) {
    let Cnt = 0;

    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            if (i == x || i == x + 2 || i == x + 4 || i == x + 6) {
                if (j == y || j == y + 2 || j == y + 4 || j == y + 6) {
                    if (MAP[i][j] != 'B') Cnt++;
                } else {
                    if (MAP[i][j] != 'W') Cnt++;
                }
            } else {
                if (j == y || j == y + 2 || j == y + 4 || j == y + 6) {
                    if (MAP[i][j] != 'W') Cnt++;
                } else {
                    if (MAP[i][j] != 'B') Cnt++;
                }
            }
        }
    }
    return Cnt;
}


function solve() {
    let case1;
    let case2;
    let min = 99999;

    for (let i = 0; i < N; i++) {
        if (i + 8 > N) break;
        for (let j = 0; j < M; j++) {
            if (j + 8 > M) break;

            case1 = white(i, j);
            case2 = black(i, j);

            min = Min(min, Min(case1, case2));

        }
    }
    console.log(min);
}
solve();