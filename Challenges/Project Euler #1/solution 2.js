function sumK(n, k){
    var div = Math.floor(n / k);

    return (k * div * (div + 1)) / 2;
}

function sumOfMultiples(numbers) {
    return sumK(numbers, 3) + sumK(numbers, 5) - sumK(numbers, 15);
}
