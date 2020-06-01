function solve()
{
    let items = 
    [
            { name: 'Edward', value: 21 },
            { name: 'Edward', value: 28 },
            { name: 'Sharpe', value: 37 },
            { name: 'And', value: 45 }
    ];
    console.log(items);

    console.log();

    items.sort((a, b) => {
        return b.value - a.value;
    });
        console.log(items);


        items.sort(function (a, b) {
                let nameA = a.name.toUpperCase(); // ignore upper and lowercase
                let nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) { return -1; }
                if (nameA > nameB) { return 1; }
                return 0;
            });
    console.log(items);
}

solve();

function solve2(object)
{
    const catalog = {};

    for (const item of object) {
        const itemInfo = item.split(" | ");

        let systemName = itemInfo[0];
        let componentName = itemInfo[1];
        let subcomponentName = itemInfo[2];

        if(!catalog.hasOwnProperty(systemName))
        {
            catalog[systemName] = {};
        }

        if (!catalog[systemName].hasOwnProperty(componentName))
        {
            catalog[systemName][componentName] = {};
        }

        if (!catalog[systemName][componentName].hasOwnProperty(subcomponentName))
        {
            catalog[systemName][componentName][subcomponentName] = {};
        }

    }

    const SystemNames = Object.keys(catalog).sort((a, b) => 
    {
        return a.Object - b.object;
    });

    for (const SystemName of SystemNames) {

        const componentNames = Object.keys(catalog[SystemName]);
        console.log(`${SystemName}`);

        for (const componentName of componentNames) {

            const subcomponentNames = Object.keys(catalog[SystemName][componentName]);

            console.log(`|||${componentName}`);

            for (const subcomponentName of subcomponentNames) {
                console.log(`||||||${subcomponentName}`);
            }

        }
    }

}

solve2(
[
'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreB | B25',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'
]
);
console.log();