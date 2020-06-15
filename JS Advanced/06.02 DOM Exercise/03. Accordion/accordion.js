function toggle1() {
    
    const div = document.querySelector("#extra");
    const buttonText = document.getElementsByClassName("button")[0];
    const buttonText2 = document.querySelector(".button");

    if (div.style.display === "none")
    {
        buttonText.textContent = "Less";
        div.style.display = "block";
    }
    else
    {
        buttonText.textContent = "More";
        div.style.display = "none";
    }
    
} 

function toggle() {
    
    const button = document.querySelector(".button");
    const div = document.getElementById("extra");

    if (button.textContent === "More")
    {
        div.style.display = "block"
        button.textContent = "Less"
    }
    else
    {
        div.style.display = "none"
        button.textContent = "More"
    }

} 
