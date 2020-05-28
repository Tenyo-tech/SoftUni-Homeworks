let items = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'And', value: 50 }
    ];
    // sort by value
    items.sort(function (a, b) {// sort by value
        return a.value - b.value;
    });
    console.log(items);
    // sort by name
    items.sort(function (a, b) {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }
        return 0;
    });
    
    console.log(items);