function solve(array)
{
    let juiceRepository = {};
    let result = {};

    for (const juice of array) {
        let juiceInfo = juice.split(" => ");

        let juiceName = juiceInfo[0];
        let juiceQuantity = Number(juiceInfo[1]);


        if(juiceRepository.hasOwnProperty(juiceName))
        {
            juiceRepository[juiceName] += juiceQuantity;
        }
        else
        {
            juiceRepository[juiceName] = juiceQuantity;
        }

        if (juiceRepository[juiceName] >= 1000)
        {
            let bottles = Math.floor(juiceRepository[juiceName] / 1000);

            result[juiceName] = bottles;
        }

        
    }

    for (const item in result) {
        console.log(`${item} => ${result[item]}`);
    }


}

solve(
[
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]
);

solve(
[
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]
);
