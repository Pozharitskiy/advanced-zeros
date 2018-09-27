
	module.exports = function getZerosCount(number, base) {
    const a = getNumbersCount(factorize(base));
    const res = [];
    const nastoyacsh = number;

    for (let burda in a) {
        let count = 0;
        number = nastoyacsh;

        while (number > 0) {
            number = Math.floor(number / burda);
            count += number;
        }
        res.push(Math.floor(count / a[burda]));
    }
    return Math.min(...res);
};

function factorize(number) {
    const res = [];
    let multiplier = 2;

    while (number > 1) {
        if (number % multiplier === 0) {
            number /= multiplier;
            res.push(multiplier);
        } else {
            multiplier++;
        }
    }
    return res;
}

function getNumbersCount(numbers) {
    const res = {};
    for (let number of numbers) {
        if (res.hasOwnProperty(number)) {
            res[number]++;
        } else {
            res[number] = 1;
        }
    }
    return res;
}
  // your implementation
