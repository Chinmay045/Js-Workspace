let dog = {
    breed: 'Golden Retrevier' ,
    color: 'Orange',
    weight: 18,
    'responds to' : ['wistle', 'clap', 'Throw ball'],
    tag_no:776
}

let dogColor = dog.color;
console.log(`color of the dog is: ${dogColor}`);
console.log(`The dog is weighing ${dog.weight} kilos`);

//we cannot write dog.responds to for a multiword key,as it has a space

let response = dog['responds to'];
console.log(`My do responds to ${response}`);
console.log(dog.tag_no);

