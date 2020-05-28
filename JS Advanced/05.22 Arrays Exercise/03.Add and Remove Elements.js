function solve(array)
{
    let result = [];
    let number = 1;

    array.forEach(array => {
        array === "add" ? result.push(number++) : result.pop(number++);
    });

    console.log(result.length === 0 ? "Empty" : result.join("\n"));
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);