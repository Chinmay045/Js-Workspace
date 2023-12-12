let name = {
    firstName: "chinmay",
    lastName: "Sandur",
   
};

let printfullName =  function () {
    console.log(this.firstName + " " + this.lastName);
}

printfullName.call(name);

let name2 = {
    firstName:"Sachin",
    lastName: "Tendlkar"
}

printfullName.call(name2);