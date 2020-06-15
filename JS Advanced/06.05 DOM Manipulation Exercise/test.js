const ivan = {
    fistName : "Ivan",
    lastName : "Ivanov",
    fullname2: this.fistName,
    fullName() {
        return this.fistName + " " + this.lastName;
    } 
};

console.log(ivan.fullName());
console.log(ivan.fullname2);