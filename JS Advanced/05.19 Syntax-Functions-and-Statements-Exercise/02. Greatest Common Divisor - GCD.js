function solve(a, b) {
    let x = Math.max(Math.abs(a),Math.abs(b));
    let y = Math.min(Math.abs(a),Math.abs(b));

    while(y !== 0)
    {
       let temp = y; 
       y =  x % y ;
       x = temp;
    }

    console.log(x);
}

solve(15, 5);
solve(2154, 458);