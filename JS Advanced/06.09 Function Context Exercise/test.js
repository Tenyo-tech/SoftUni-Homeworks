const array = [5,5,5,5];

function getSum(total, num) {
    return total + Math.round(num);
}


let sum = array.reduce(getSum,5);
console.log(sum);