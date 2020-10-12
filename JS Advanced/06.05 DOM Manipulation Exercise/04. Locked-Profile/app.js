function lockedProfile() {
   
    const button = document.querySelectorAll("button");
    [...button].forEach(b=> {
        b.addEventListener("click", onClick)
    });

    function onClick(e)
    {
        const parent = e.target.parentNode;

        const lock = parent.querySelector('input[type="radio"][value = "lock"]');

        if (lock.checked) {
            return;
        }

        const hiddenField2 = parent.querySelector('div')
        const hiddenField = document.getElementById("user1HiddenFields");

        if (hiddenField2.style.display !== "block") {
            hiddenField2.style.display = "block";
            e.target.textContent = "Hide it";
        } else {
            hiddenField2.style.display = "none";
            e.target.textContent = "Show more";
        }

    }
}