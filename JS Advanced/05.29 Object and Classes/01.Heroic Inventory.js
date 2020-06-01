function heroes(input)
{
    let heroRepository = [];

    for (let i = 0; i < input.length; i++) {
        const heroInfo = input[i].split(" / ");

        let heroName = heroInfo[0];
        let heroLevel = Number(heroInfo[1]);
        let heroItems = new Array();
        if(heroInfo.length > 2)
        {
            heroItems = heroInfo[2].split(", ")
        }
        
        
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems,
        };

        heroRepository.push(hero);

    }

    console.log(JSON.stringify(heroRepository));

}

heroes(
    [
        'Isacc / 25',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );

heroes(
[
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);

heroes(
    [
        'Jake / 1000 / Gauss, HolidayGrenade'
    ]
    );