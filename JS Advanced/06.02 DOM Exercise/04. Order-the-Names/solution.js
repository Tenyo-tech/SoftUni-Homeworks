function solve() {

    document.querySelector("button").addEventListener("click", onClick);
    const list = {};

    const items = document.querySelector("ol").querySelectorAll("li");
    [...items].forEach(e => {
        if(e.textContent.trim().length == 0)
        {
            return;
        }
        const letter = e.textContent[0].toLocaleUpperCase();
        list[letter] = e.textContent;
    });

    console.log(list);

    function onClick()
    {
        const input = document.querySelector("input");
        const value = input.value;
        const letter = value[0].toLocaleUpperCase();

        if(!list.hasOwnProperty(letter))
        {
            list[letter] = value;
        }
        else
        {
            list[letter] = list[letter] + ", " + value;
        }

        const index = letter.charCodeAt(0) - 65;
        items[index].textContent = list[letter];

        console.log(list);
        input.value = "";
    }
}

function solve2() {
    const button = document.querySelector("button");
    const list = document.querySelectorAll("li");

    button.addEventListener("click", function (e) {
        e.preventDefault();

        let value = document.querySelector("input").value;
        let firstLetter = value[0].toUpperCase();
        let index = Number(firstLetter.charCodeAt()) - 65;
        let oldValue = list[index].innerHTML;

        let name = firstLetter + value.substring(1).toLocaleLowerCase()

        if (oldValue === "") {
            list[index].innerHTML = name;
        } else {
            list[index].innerHTML += `, ${name}`;
        }
    });
}

function solve3()
{
    const button = document.querySelector("button");
    const liElements = document.querySelectorAll("li");

    button.addEventListener("click", onClick);

    function onClick()
    {
        let inputValue = document.querySelector("input").value;
        let firstLetter = inputValue[0].toLocaleUpperCase();
        let index = firstLetter.charCodeAt() - 65;
        let name = firstLetter + inputValue.substring(1).toLocaleLowerCase();

        if (liElements[index].textContent === "")
        {
           liElements[index].textContent = name;
        }
        else
        {
            liElements[index].textContent = liElements[index].textContent + ", " + name;
        }

        document.querySelector("input").value = "";
        
    }

}