function subtract() {
   let firstNumber = Number(document.getElementById("firstNumber").value);
   let secondNumber = Number(document.getElementById("secondNumber").value);

   let substract = firstNumber - secondNumber;

   document.getElementById("result").textContent = substract;
}