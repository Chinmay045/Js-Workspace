let name = {
    firstName: "chinmay",
    lastName: "Sandur",
    printfullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

name.printfullName()

let name2 = {
    firstName:"Sachin",
    lastName: "Tendlkar"
}

name.printfullName.call(name2);