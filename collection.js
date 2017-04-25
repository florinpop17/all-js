// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
function shapeArea(n) {
   if(n === 1) return 1;
   return 4 * (n-1) + shapeArea(n-1);
}

// Pick-out the largest even number from an array of integers
function maximalEven(inputArray) {
    var max = -9999999;
    for(var i=0; i<inputArray.length; i++){
        if(inputArray[i] % 2 === 0 && inputArray[i] > max) max = inputArray[i];
    }
    return max;
}

// Is palindrome
function checkPalindrome(inputString) {
    for(var i=0; i < inputString.length/2; i++){
        if(inputString[i] !== inputString[inputString.length - i - 1]) return false;
    }

    return true;
}

// Century from year
function centuryFromYear(year) {
    return Math.floor((year-1) / 100)+1;
}

// Given a decimal integer n, find an integer k ≥ 2 such that the representation of n in base k
// has the maximum possible number of zeros. If there are several answers, output the smallest one.
function maxZeros(n) {
    var base = 2;
    var maxZeros = 0;
    var result = 2;
    while(base < 16){
        var x = n.toString(base);
        var zeroes = x.split('').filter(i => i==='0').length;
        if(zeroes > maxZeros){
            maxZeros = zeroes;
            result = base;
        }
        base++;
    }
    return result;
}

// xor
var res = a;
for(var i=a+1; i<=b; i++){
    res ^= i;
}
return res;

// Array packing of bits
function arrayPacking(a) {
    var res = [];
    for(var i=0; i<a.length; i++)
        res[i] = ('00000000'+a[i].toString(2)).substr(-8);
    return parseInt(res.reverse().join(''), 2);
}

// Sum of factors until n is different
function factorSum(n) {
    allPrimes = (n) => {
        var arr = [];
        var div = 2;
        while(n !== 1){
            while(n % div === 0){
                arr.push(div);
                n /= div;
            }
            div++
        }
        return arr;
    }

    isPrime = (n) => {
        for(var i=2; i<n; i++){
            if(n % i === 0) return false;
        }
        return true;
    }

    var last = 0;
    while(!isPrime(n) && last!==n){
        last = n;
        n = allPrimes(n).reduce((acc, item) => acc+=item, 0);
    }
    return n;
}

// Given an array of integers, find the rightmost round number in it and output its position in the array (0-based).
// If there are no round numbers in the given array, output -1.
function rightmostRoundNumber(inputArray) {
    for(var i=inputArray.length-1; i>=0; i--){
        if(inputArray[i] % 10 === 0) return i;
    }
    return -1;
}

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjacentElementsProduct(inputArray) {
    var max = -9999999;
    for(var i=0; i<inputArray.length-1; i++){
        var curr = inputArray[i] * inputArray[i+1];
        if(curr > max) max = curr;
    }
    return max;
}

// Given a set of complex values, find their product.
function arrayComplexElementsProduct(real, imag) {
    var x = [real[0], imag[0]];
    for(var i=1; i<real.length; i++){
        var temp = x;
        x = [x[0] * real[i] - x[1] * imag[i], x[0] * imag[i] + x[1] * real[i]];
    }
    return x;
}

// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.
function reverseOnDiagonals(matrix) {
    for(var i=0; i<matrix.length; i++){
        for(var j=0; j<matrix.length / 2; j++){
            if(i === j){
                var temp = matrix[i][j];
                matrix[i][j] = matrix[matrix.length - i - 1][matrix.length - i - 1];
                matrix[matrix.length - i - 1][matrix.length - i - 1] = temp;
            }
            if(i + j === matrix.length - 1){
                var temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }

    return matrix;
}

// Given an integer, check if it is an increasing digits sequence.
function isIncreasingDigitsSequence(n) {
    n = n.toString().split('').map(Number);
    for(var i=0; i<n.length -1; i++){
        if(n[i+1] <= n[i]) return false;
    }
    return true;
}

// Perfect array is an array in which each element is equal to the length of this array. Check if a given array is perfect.
function perfectArray(A) {
    var len = A.length;
    return A.every(i => i===len);
}

// Digits from Math.abs(a[i+1] - a[i])
function digitDistanceNumber(n) {
    var res = [];
    n = n.toString().split('').map(Number);
    for(var i=0; i<n.length-1; i++){
        res.push(Math.abs(n[i+1] - n[i]));
    }
    return parseInt(res.join(''), 10);
}

// NAND operation
function shefferStroke(a, b) {
    return !a || !b;
}

// Given a string, find out if its characters can be rearranged to form a palindrome.
function palindromeRearranging(inputString) {
    var count = {};
    inputString.split('').forEach(cr => {
        count[cr] = (count[cr] || 0) + 1;
    })

    var numberOfOdds = 0;
    for(key in count){
        if(count[key] % 2 === 1) numberOfOdds++;
    }

    return numberOfOdds < 2;
}

// Given an integer n, find the value of phi(n), where phi is Euler's totient function
function eulersTotientFunction(n) {

    // Greatest common divisor
    gcd = (a,b) => {
        if(!a) return b;
        return gcd(b%a, a);
    }

    var count = 0;
    for(var i=1; i<=n; i++){
        if(gcd(i, n) === 1) count++;
    }
    return count;
}

// Cool strings
// Let's call a string cool if it is formed only by Latin letters and no
// two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.
function coolString(inputString) {
    isLower = (c) => {
        return c === c.toLowerCase();
    }

    isUpper = (c) => {
        return c === c.toUpperCase();
    }

    if(/[\W\d]/.test(inputString)) return false;
    for(var i=0; i<inputString.length - 1; i++){
        var curr = inputString[i];
        var next = inputString[i+1];
        if(isLower(curr) && isLower(next) || isUpper(curr) && isUpper(next)) return false;
    }
    return true;
}

// Lucky numbers are the positive integers whose decimal representations contain only the lucky digits 4 and 7.
function isLuckyNumber(n) {
    return n.toString().split('').every(i => i==='4' || i==='7');
}

// Determine if a number is prime
isPrime = (n) => {
    for(var i=2; i<n; i++){
        if(n % i === 0) return false;
    }
    return true;
}

// Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.
function decipher(cipher) {
    var len = 1;
    var i = 0;
    var res = [];
    cipher = cipher.split('');
    while(cipher.length > 0){
        var curr = '';
        while(curr < 97){
            len++;
            curr = parseInt(cipher.slice(0, len).join(''),10);
        }
        cipher.splice(0, len);
        len = 0;
        res.push(String.fromCharCode(curr));
    }
    return res.join('');
}

// Two arrays are called similar if one can be obtained from another
// by swapping at most one pair of elements in one of the arrays.
function areSimilar(A, B) {
    var pairs = 0;
    var falseA = [];
    var falseB = [];
    for(var i=0; i<A.length; i++){
        if(A[i] !== B[i]){
            pairs++;
            falseA.push(A[i]);
            falseB.push(B[i]);
        }
        if(pairs > 2) return false;
    }
    return falseA.sort((a,b) => a-b).join('') === falseB.sort((a,b) => a-b).join('');
}

// Given a positive integer number and a certain length, we need to modify the given number to have a specified length.
// We are allowed to do that either by cutting out leading digits
// (if the number needs to be shortened) or by adding 0s in front of the original number.
function integerToStringOfFixedWidth(number, width) {
    number = '00000' + number;
    return number.substr(-width);
}

// Election winner votes
function electionsWinners(votes, k) {
    var max = Math.max(...votes);
    var count = 0;
    votes.forEach(vote => {
        if(vote + k > max) count++;
    });
    return k === 0 ? votes.indexOf(max) === votes.lastIndexOf(max) ? 1 : 0 : count;
}

// Timed reading. Boy reading box if word length is less than or equal to maxLenght
function timedReading(maxLength, text) {
    var res = text.match(/[a-zA-Z]+/g);
    return res === null ? 0 : res.filter(i => i.length <= maxLength).length;
}

// Switch lights if candle is lit
function switchLights(a) {
    a = a.map(i => i===1);
    for(var i=0; i<a.length; i++){
        if(a[i]){
            for(var j=0; j<=i; j++){
                a[j] = !a[j];
            }
        }
    }
    return a.map(i => i ? 1 : 0);

    // OR
    for(var i=0; i<a.length; i++){
        if(a[i]){
            for(var j=0; j<=i; j++){
                a[j] = a[j] === 1 ? 0 : 1;
            }
        }
    }
    return a;
}

// Add border of * to a given array of strings
function addBorder(picture) {
    return [
        new Array(picture[0].length + 2).fill('*').join(''),
        ...picture.map(img => '*'+img+'*'),
        new Array(picture[0].length + 2).fill('*').join('')
    ]
}

// Banana land buying bananas with coins
function minimalNumberOfCoins(coins, price) {
    var count = 0;
    var i = coins.length - 1;
    while(price > 0 && i > -1){
        if(price - coins[i] >= 0) {
            price -= coins[i];
            count++;
        } else {
            i--;
        }
        console.log(price, coins[i])
    }
    return count;
}

// Check whether the given string is a subsequence of the plaintext alphabet.
function alphabetSubsequence(s) {
    for(var i=0; i<s.length - 1; i++){
        if(s.charCodeAt(i) >= s.charCodeAt(i+1)) return false;
    }
    return true;
}



// There are some people and cats in a house. You are given the number of legs they have all together.
// Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order.
function houseOfCats(legs) {
    var res = [];
    var subtract = 0;
    while(subtract <= legs){
        res.push((legs - subtract) / 2);
        subtract += 4;
    }
    return res.reverse();
}

// Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(inputArray) {
    var max = Math.max(...inputArray.map(i => i.length));
    return inputArray.filter(i => i.length === max);
}

// Boy walking counting house numbers
function houseNumbersSum(inputArray) {
    var i=0, sum=0;

    while(inputArray[i] !== 0){
        sum += inputArray[i];
        i++;
    }

    return sum;
}

// How many strings equal to A can be constructed using letters from the string B?
// Each letter can be used only once and in one string only.
function stringsConstruction(A, B) {
    B = B.split('').sort();
    A = A.split('').sort();
    var times = Math.floor(B.length / A.length);
    var full = 0;

    for(var q=0; q<times; q++){
        var count = 0;

        for(var i=0; i<A.length; i++){
            if(B.indexOf(A[i]) > -1){
                count++;

                B.splice(B.indexOf(A[i]), 1);
            } else {
                break;
            }
        }

        if(count === A.length){
            full++;
        }
    }

    return full;
}

// Valid MAC48 address
function isMAC48Address(inputString) {
    var res = inputString.split('-')

    return res.length === 6 && res.every(part => /^[0-9A-F]{2}$/.test(part));
}

// Given a sequence of non-negative integers, find its median.
function arrayMedian(sequence) {
    sequence.sort((a,b) => a-b);

    if(sequence.length % 2 === 0){
        return (sequence[sequence.length / 2] +sequence[sequence.length / 2 - 1]) / 2
    }

    return sequence[Math.floor(sequence.length / 2)]
}

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
function arrayMaximalAdjacentDifference(inputArray) {
    var max = 0;
    for(var i=0; i<inputArray.length-1; i++){
        var dif = Math.abs(inputArray[i+1] - inputArray[i]);
        if(dif > max) max = dif;
    }

    return max;
}

// Replace each digits with #
function replaceAllDigitsRegExp(input) {
    return input.replace(/[0-9]/g,'#');
}

// Number of even digits of an integer
function numberOfEvenDigits(n) {
    return n.toString().split('').map(Number).filter(i => i%2==0).length;
}

// Coffee at a vending machine
function coffeeVendingMachine(number){
    var coffee = ['French Roast', 'Colombian', 'Kona'];
    return cofee(number-1);
}

// Tennis game scores
function tennisSet(score1, score2) {
    if(score1 === 6 && score2 < 5 || score2 === 6 && score1 < 5) return true;
    if(score1 === 7 && (score2 === 6 || score2 === 5)) return true;
    if(score2 === 7 && (score1 === 6 || score1 === 5)) return true;
    return false
}

// Special numbers from l to r
function specialNumbers(l, r) {
    var count = 0;
    for(var i=l; i<=r; i++){
        if(specialNumber(i)) count++;
    }
    return count;
}

// A number is considered special, if it remains the same (and continues being a valid number) when rotated by 180°.
isSpecial = (n) => {
    var arr = n.toString().split('').filter(i => i!= '');
    for(var i=0; i<arr.length / 2; i++){
        if(arr[i] === '9' || arr[i] === '8' || arr[i] === '6' || arr[i] === '0'){
            if(arr[i] === '9' && arr[arr.length-i-1] !== '6') return false;
            if(arr[i] === '6' && arr[arr.length-i-1] !== '9') return false;
            if(arr[i] === '8' && arr[arr.length-i-1] !== '8') return false;
            if(arr[i] === '0' && arr[arr.length-i-1] !== '0') return false;
        } else {
            return false;
        }
    }
    return true;
}


// Correct variable name using regex
function variableName(name) {
    return name.match(/^[a-zA-Z_]+[a-zA-Z0-9_]*/) === null ? false : name.match(/^[a-zA-Z_]+[a-zA-Z0-9_]*/)[0].length === name.length;
}

// Given an array of integers, find the number of inversions it contains.
function countInversionsNaive(inputArray) {
    var count = 0
    for(var i=0; i<inputArray.length; i++){
        for(var j=i+1; j<inputArray.length; j++){
            if(inputArray[i] > inputArray[j]) count++;
        }
    }

    return count;
}

// Mixed fraction from reduced improper fraction
function improperFractionToMixed(a) {
    return [Math.floor(a[0] / a[1]), a[0] % a[1], a[1]];
}


// Magical well, marble a, b
function magicalWell(a, b, n) {
    var sum = 0;
    var i = 0;
    while(i < n){
        sum += a * b;
        a++;
        b++;
        i++;
    }

    return sum;
}

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
