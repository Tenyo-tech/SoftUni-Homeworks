function solve(input)
{
    let number = input[0];

    for (let i = 1; i < input.length; i++)
    {
        const command = input[i];

        if(command === "chop")
        {
            number /= 2;
            console.log(number);
        }
        else if(command === "dice")
        {
            number = Math.sqrt(number);
            console.log(number);
        }
        else if(command === "spice")
        {
            number +=1;
            console.log(number);
        }
        else if(command === "bake")
        {
            number *= 3;
            console.log(number);
        }
        else if(command === "fillet")
        {
            number -= number * 0.20;
            console.log(number);
        }
    } 

}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
console.log(' ')
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);