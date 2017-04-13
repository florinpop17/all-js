
// Decipher Mad Coder evil genius. Check bit if it is 1 and change to 0
function killKthBit(n, k) {
    n = n.toString(2).split('').reverse();
    if(n[k-1] === '1') n[k-1] ='0';
    return parseInt(n.reverse().join(''), 2)
}

// Hamming distance
function hammingDistance(string1, string2) {
    var count = 0;
    for(var i=0; i<string1.length; i++){
        if(string1[i] !== string2[i]) count++;
    }
    return count;
}

// Compare 2 given fractions
function fractionComparison(A, B) {
    var a = A[0] / A[1];
    var b = B[0] / B[1];

    return a > b ? '>' : a < b ? '<' : '=';
}

//Given an array A of integers construct an array B of the same length as A such that
function suffixSums(A) {
    var B = [];
    for(var i=0; i<A.length; i++){
        var sum = 0;
        for(var j=i; j<A.length; j++){
            sum += A[j];
        }
        B.push(sum);
    }
    return B;
}

// If left or right or left+right divisible by 3, remove. Until s.length > 0 or operation can't be done.
function truncateString(s) {
    s = s.split('');

    while(s.length > 0){
        var left = parseInt(s[0],10);
        var right = parseInt(s[s.length-1],10);

        if(left % 3 === 0) s.shift();
        else if(right % 3 === 0) s.pop();

        else if((left + right) % 3 === 0){
            s.shift();
            s.pop();
        }
        else {
            break;
        }
    }

    return s.join('')
}

// different pairs of numbers summing to n from l to r
function pairsLR(n, l ,r){
    var count = 0;
    for(var i=l i<=r; i++){
        for(var j=i; j<=r; j++){
            if(i + j === r) count++;
        }
    }
    return count;
}

// Sequence of different numbers after squaring the digits:
function squareDigitsSequence(a0) {
    var arr = [a0];
    while(arr.indexOf(sumDigSquared(a0)) === -1){
        a0 = sumDigSquared(a0)
        arr.push(a0)
    }
    return arr.length + 1;
}

sumDigSquared = (n) => {
    return n.toString().split('').map(Number).reduce((acc, item) => acc+=item*item, 0);
}

// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.
function isSumOfConsecutive2(n) {
    var count = 0;
    for(var i=n-1; i>=1; i--){
        if(n - i > 0){
            var j = i;
            var m = n;
            while(m - j >= 0 && j > 0){
                m-=j;
                j--;
            }
            if(m === 0) count++;
        }
    }

    return count;
}

// Candles
function candles(candlesNumber, makeNew) {
    var total = candlesNumber;
    var left = 0;
    while(true){
        left += candlesNumber;
        candlesNumber = Math.floor(left / makeNew);
        left %= makeNew;
        total += candlesNumber;
        if(left + candlesNumber < makeNew) break;
    }

    return total;
}

// Rounders -> We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach
function rounders(value) {
    var arr = value.toString().split('').map(Number).reverse();

    for(var i=0; i<arr.length-1; i++){
        if(arr[i] >= 5){
            arr[i+1]++;
        }
        arr[i] = 0;
    }

    return parseInt(arr.reverse().join(''), 10);
}

// Increase number roundness
function increaseNumberRoundness(n) {
    while(n % 10 === 0){
        n /= 10;
    }

    return n.toString().split('').some(i => i === '0');
}

// Boxes with red an yellow apples
function appleBoxes(k) {
    var yellow = 0;
    var red = 0;

    for(var i=1; i<=k; i++){
        if(i % 2 === 1){
            yellow += i*i;
        } else {
            red += i*i;
        }
    }

    return red - yellow;
}

// Adding withouth carrying
function additionWithoutCarrying(param1, param2) {
    var res = [];
    while(param1 > 0 || param2 > 0){
        res.push((param1 + param2) % 10);
        param1 = Math.floor(param1 / 10);
        param2 = Math.floor(param2 / 10);
    }
    return parseInt(res.reverse().join(''),10) || 0 // in case we have an empty array;
}

// It is guaranteed that two integers are equal which is the 3rd?
function extraNumber(a, b, c) {
    return a^b^c;
}

// Count the number of different edges in a given undirected graph with no loops and multiple edges.
function graphEdges(matrix) {
    var count = 0;
    for(var i=0; i<matrix.length; i++){
        for(var j=0; j<matrix[0].length; j++){
            if(matrix[i][j] && matrix[i][j] === matrix[j][i]){
                count++;
            }
        }
    }
    return count/2;
}

// Swap neightbor digis pairs
function swapNeighbouringDigits(n) {
    var arr =  n.toString().split('');
    for(var i=0; i<arr.length; i+=2){
        var tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
    }
    return parseInt(arr.join(''),10);
}

// Longest word in a string
function longestWord(text) {
    var mat = text.match(/[a-zA-Z]+/g)
    var len = mat.map(i => i.length);
    return mat[len.indexOf(Math.max(...len))];
}

// Given a string inputString and an integer distance,
// find the number of pairs of equal characters in the inputString delimited by exactly distance characters.
function countDistantPairs(inputString, distance) {
    var count = 0;
    for(var i=0; i<inputString.length-1-distance; i++){
        if(inputString[i] === inputString[i+1+distance]){
            count++;
        }
    }
    return count;
}

// Subtracting by hand
function subtractionByRegrouping(minuend, subtrahend) {
    var res =[];
    while(minuend > 0){
        var x = minuend % 10;
        var y = subtrahend % 10;
        if(x < y){
            x += 10;
            minuend -= 10
        }
        res.push(x);

        minuend = Math.floor(minuend/10);
        subtrahend = Math.floor(subtrahend/10);
    }
    return res
}

// Matrix transpose
function matrixTransposition(matrix) {
    var m = [];
    for(var i=0; i<matrix[0].length; i++){
        m[i] = [];
        for(var j=0; j<matrix.length; j++){
            m[i][j] = matrix[j][i];
        }
    }
    return m
}

// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
function chessKnightMoves(cell) {
    var x = cell.charCodeAt(0) - 'a'.charCodeAt(0);
    var y = cell.charCodeAt(1) - '1'.charCodeAt(0);

    var count = 0;
    var dir = [[-2, 1],[-1, 2],[1, 2],[2, 1],[1, -2],[2, -1],[-2, -1],[-1, -2]];
    var table = [];

    for(var i=0; i<8; i++){
        table[i] = [];
        for(var j=0; j<8; j++){
            if(i === x && j === y){
                table[i][j] = 'k'
            } else {
                table[i][j] = '.';
            }
        }
    }

    for(var i=0; i<dir.length; i++){
        if(table[dir[i][0] + x]){
            if(table[dir[i][0] + x][dir[i][1] + y]){
                table[dir[i][0] + x][dir[i][1] + y] = 'x'
                count++;
            }
        }
    }

    return count;
}

// n-th Fibonacci number
function fibonacciNumber(n) {
    var fib = [0, 1];
    var f1 = fib[0];
    var f2 = fib[1];

    while(fib.length <= n){
        var temp = f2;
        f2 += f1;
        f1 = temp;
        fib.push(f2);
    }

    return fib[n];
}

// Given a certain array, find out if it's a permutation of numbers from 1 to a given integer.
function isPermutation(n, inputArray) {
    return inputArray.sort((a, b)=> a-b).filter((item, idx) => item === (idx+1)).length === n;
}

// Regular Brackets with only ()
function regularBrackets(brackets){
    var equal = 0;
    for(var i=0; i<brackets.length; i++){
        brackets[i] === '(' ? equal += 1 : equal -= 1;
        if( equal === -1) return false;
    }
    return equal === 0 ? true : false;
}

// All distinct primes of a number
function primeFactors2(n) {
    var primes = [];
    var div = 2;
    while(n !== 1){
        if(n % div === 0){
            while(n % div === 0){
                n /= div;
            }
            primes.push(div);

        }
        div++;
    }
    return primes
}

// Christmas mobile app gift safety by swapping 3 letters
function giftSafety(gift) {
    var count = 0;
    for(var i=0; i<gift.length-2; i++){
        if(gift[i] === gift[i+1] || gift[i+1] === gift[i+2] || gift[i] === gift[i+2]){
            count++;
        }
    }
    return count;
}

// White bishop black pawn
function bishopAndPawn(bishop, pawn) {
    var x1 = bishop.charCodeAt(0) - 'a'.charCodeAt(0);
    var x2 = pawn.charCodeAt(0) - 'a'.charCodeAt(0);
    var y1 = bishop.charCodeAt(1) - '1'.charCodeAt(0);
    var y2 = pawn.charCodeAt(1) - '1'.charCodeAt(0);

    return Math.abs(x2 - x1) === Math.abs(y2 - y1)
}

// Check for regular Brackets () [] and {}
function regularBracketSequence2(b) {
    var stack = [];
    b = b.split('');
    for(var i=0; i<b.length; i++){
        if(b[i] === '(' || b[i] === '[' || b[i] === '{') {
            stack.push(b[i])
        } else {
            if(stack.length === 0) {
                stack.push(b[i])
                break;
            } else if (b[i] === ')' && stack[stack.length - 1] === '('
            || b[i] === ']' && stack[stack.length - 1] === '['
            || b[i] === '}' && stack[stack.length - 1] === '{'){
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}

// Most frequent Digit sum
function mostFrequentDigitSum(n) {
    var obj = {}
    while(n > 0){
        var x = sumDig(n)
        obj[x] = (obj[x] || 0) + 1;
        n -= x;
    }

    var max = 0;
    var nr = 0;
    for(key in obj){
        if(obj[key] >= max){
            max = obj[key];
            nr = key;
        }
    }


    return parseInt(nr,10);
}

// Sum of the digis of n
sumDig = (n) => {
    return n.toString().split('').map(Number).reduce((acc, item) => acc+=item, 0);
}

// Sum of digits squared
sumDigSquared = (n) => {
    return n.toString().split('').map(Number).reduce((acc, item) => acc+=item*item, 0);
}

// Product of the digis of n
productDig = (n) => {
    return n.toString().split('').map(Number).reduce((acc, item) => acc*=item, 1);
}

// IPv4 address Check
function isIPv4Address(inputString) {
    var x = inputString.split('.').filter(i => i!== '' && i>=0 && i<=255);
    if(x.length !== 4) return false;

    return true;
}

// Given array of integers, find the number of sorted pairs formed by its (different)
// elements such that the second element in the pair is divisible by the first one.
function divisorsPairs(sequence) {
    var pairs = [];
    for(var i=0; i<sequence.length; i++){
        for(var j=i+1; j<sequence.length; j++){
            if(sequence[j] % sequence[i] === 0){
                pairs.push([sequence[i] , sequence[j]]);
            }
        }
    }
    return pairs.length;


    // OR
    var count = 0;
    for(var i=0; i<sequence.length; i++){
        for(var j=i+1; j<sequence.length; j++){
            if(sequence[j] % sequence[i] === 0){
                count++;
            }
        }
    }
    return count;
}

// Different multiplication table values
function differentValuesInMultiplicationTable(n, m) {
    var mat = [];
    for(var i=1; i<=n; i++){
        for(var j=1; j<=m; j++){
            mat.push(i*j);
        }
    }

    return mat.filter((item, idx, arr) => arr.indexOf(item) === idx).length;
}

// Return only different items from the string
function differentItemsFromString() {
    return str.split('').filter((item, idx, arr) => arr.indexOf(item) !== idx).join('');
}

// Message from binary code
function messageBinary(code){
    return code.match(/[0-1]{8}/g).map(i => String.fromCharCode(parseInt(i,2))).join('');
}

// Different matrix of length 2x2
function difMatrix(matrix){
    var res = []
    for(var i=0; i<matrix.length-1; i++){
        for(var j=0; j<matrix[0].length-1; j++){
            var x = ''+matrix[i][j]+matrix[i+1][j]+matrix[i][j+1]+matrix[i+1][j+1];
            res.push(x);
        }
    }
    return res.filter((item, idx, arr) => arr.indexOf(item)===idx).length;
}
