function solve(object)
{
    const catalog = {};

    for (const item of object) {

        const itemInfo = item.split(" | ");

        let make = itemInfo[0];
        let model = itemInfo[1];
        let quantity = Number(itemInfo[2]);

        if(!catalog.hasOwnProperty(make))
        {
            catalog[make] = {};
        }

        if (!catalog[make].hasOwnProperty(model))
        {
            catalog[make][model] = quantity;
        }
        else
        {
            catalog[make][model] += quantity;
        }

        
    }
    const makes = Object.keys(catalog)

    
    for (const item of makes) {
        console.log(item +` ${catalog[item].lenght}` );
        const models = Object.keys(catalog[item]);
        for (const item2 of models) {
            console.log(`###${item2} -> ${catalog[item][item2]}`);
        }
    }
}

solve(
[
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'
]
);

solve(
    [
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
    ]
    )