function addItem() {
    // let newItemText = document.getElementById("newItemText").value;
    // let newItemValue = document.getElementById("newItemValue").value;

    // console.log(newItemText,newItemValue);

    // const option = document.createElement("option");
    // option.textContent = newItemText;
    // option.value = newItemValue;

    // document.querySelector("#menu").appendChild(option);

    // document.getElementById("newItemText").value = "";
    // document.getElementById("newItemValue").value = "";


    let textInput = document.getElementById("newItemText").value;
    let valueInput = document.getElementById("newItemValue").value;

    const dropMenu = document.getElementById("menu");

    const option = document.createElement("option");
    option.textContent = textInput;
    option.value = valueInput;


    dropMenu.appendChild(option);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}   