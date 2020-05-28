function solve(array)
{
    let item = array[0];
    let result = array.filter((value,i) => value >= Math.max(null, ...array.slice(0,i)));
        console.log(result.join("\n"));

}

function solve3(array)
{
    let result = [];
    let item = array[0];
    result.push(item);
    array.forEach(element => {
        if(element > item)
        {
            item = element;
            result.push(item);
        }
    });
    console.log(result.join("\n"));
}


function solve4(array)
{
    let result = [];
    let item = array[0];
    result.push(item);
    for (let index = 1; index < array.length; index++) {

        const element = array[index];

        if(element >= Math.max(null,...array.slice(0,index)))
        {
            result.push(element);
        }
    }

    console.log(result.join("\n"));
}

solve4([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);

function solve2(array) {
    console.log(array
        .filter((v, i) =>
            v >= Math.max(null, ...array
                .slice(0, i)))
        .join("\n"));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
console.log();
solve([1, 
    2, 
    3,
    4]
    );
console.log();
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );



