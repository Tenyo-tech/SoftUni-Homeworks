function solve(number){
    let symbol = String(number)[0];
    let isTheSame = true;
    let sum = Number(symbol);

    for (let i = 1 ; i < String(number).length; i++){
        let element = String(number)[i];
        if(symbol !== element){
            isTheSame = false;
        }
        sum += Number(element);
    } 

    console.log(isTheSame);
    console.log(sum);
}


solve(2222222);
solve(1234);