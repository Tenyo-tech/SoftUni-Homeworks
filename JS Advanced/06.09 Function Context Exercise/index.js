function solve(){
   const rows = document.querySelector("tbody");
   const items = rows.querySelectorAll("tr");
   rows.addEventListener("click", onClick);

   function onClick(e) {
      const target = e.target.parentNode;

      if (target.nodeName === "TR"){
         if (target.style.backgroundColor !== ""){
            target.style.backgroundColor = "";
         } else {
            [...items].forEach(i => i.style.backgroundColor = "");
            target.style.backgroundColor = "#413f5e";
         }
      }
   }
}
