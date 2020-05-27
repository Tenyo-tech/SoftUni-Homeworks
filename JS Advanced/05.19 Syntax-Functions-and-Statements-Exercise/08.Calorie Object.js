function solve(array) {
    let result = [];


    for (let i = 0; i < array.length -1; i++)
    {
        let food = array[i] + ": ";
        let calories = array[i+1];
        let couple = food + calories;


        result.push(couple);
        i++;
    }

    console.log(`{ ${result.join(', ')} }`);
}



solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);