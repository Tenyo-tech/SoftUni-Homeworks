function solve(array)
{
    console.log(array
        .sort((a, b) =>
            a.length - b.length ||
            a.toLowerCase()
            .localeCompare(b.toLowerCase()))
        .join("\n"));
}

solve([
'alpha', 
'beta', 
'gamma']
);
console.log();

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

);
console.log();

solve(['test', 
'Deny', 
'omen', 
'Default']
);
console.log();


