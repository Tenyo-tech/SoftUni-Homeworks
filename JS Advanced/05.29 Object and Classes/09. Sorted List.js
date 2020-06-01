class List
{
    constructor()
    {
        this.arr = [];
        this.size = 0;
    }


    add(elemenent)
    {
        this.arr.push(elemenent);
        this.arr.sort((a,b) => a - b);
        this.size++;
    }

    remove(index)
    {
        if (index >= 0 && index < this.arr.length)
        {
            this.arr.splice(index,1);
            this.arr.sort((a,b) => a - b);
            this.size--;
        }
        
    }

    get(index)
    {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }
}

var myList = new List();

for (let i = 0; i < 10; i++) {
    myList.add(i);
}

myList.remove(9);


console.log(myList);