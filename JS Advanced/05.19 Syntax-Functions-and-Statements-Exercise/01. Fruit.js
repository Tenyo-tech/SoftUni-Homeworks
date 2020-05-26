function fruitPrice(fruit, grams, price)
{
    let kilograms = grams / 1000;
    let totalPrice = price * kilograms;
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
}

fruitPrice('orange', 2500, 1.80);
fruitPrice('apple', 1563, 2.35);