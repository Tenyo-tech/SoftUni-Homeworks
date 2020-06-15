function solve() {
   const chat =document.getElementById("chat_messages");
   const message = document.querySelector("#chat_input");
   const send = document.querySelector("#send");

   send.addEventListener("click", (e) => {
      e.preventDefault();
      let newMessage = document.createElement("div");
      newMessage.classList.add("message");
      newMessage.classList.add("my-message");
      newMessage.textContent = message.value;
      
      chat.appendChild(newMessage);
      document.querySelector("#chat_input").value = "";
   });
}


