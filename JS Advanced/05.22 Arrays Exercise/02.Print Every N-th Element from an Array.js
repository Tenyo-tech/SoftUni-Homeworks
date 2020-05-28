function solve(array)
{
  let step =  array.pop();
  
  for (let index = 0; index < array.length; index++) 
  {
      console.log(array[index]);
      index +=step -1;
  }
  
}

solve(
    ['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);

solve(['dsa',
'asd', 
'test', 
'tset', 
'2']
);

solve(['1', 
'2',
'3', 
'4', 
'5', 
'6']
);