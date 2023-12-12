let name = {
    firstName: "chinmay",
    lastName: "Sandur",
   
};

let printfullName =  function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown +" ," + state);
}

printfullName.call(name, "shimoga", "Karnataka");

let name2 = {
    firstName:"Sachin",
    lastName: "Tendlkar"
}

printfullName.call(name2," Bengaluru", "Karnataka");
printfullName.apply(name2,["mumbai", "Maharashtra"]);