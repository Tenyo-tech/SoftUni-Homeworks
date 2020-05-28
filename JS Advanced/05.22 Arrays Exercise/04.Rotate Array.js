function solve(array)
{
    let rotation = Number(array.pop());

    for (let index = 0; index < rotation % array.length; index++) {
        
        array.unshift(array.pop());
    }
    
    console.log(array.join(" "));

}

function solve2(array) {
    let count = array.pop();

    for (let i = 0; i < count % array.length; i++) {
        let temp = array.pop();
        array.unshift(temp);
    }

    console.log(array.join(" "));
}


solve(['1', 
'2', 
'3', 
'4', 
'2']
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);