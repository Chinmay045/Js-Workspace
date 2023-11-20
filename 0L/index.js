//Requirements:
//1)Display keys of all profiles after 2 seconds
//2)Display profiles of kishan after 3 sec(from one)
//3)Display kishan's age after 2 seconds (from 2)
//4)displaty kishans hobbies after 4 seconds (from 3)
const profiles = {
    'balaji': {
        fullname: "Balaji Kr",
        age: 35,
        married: true,
        hobbies: ['Defence', 'Finance', 'Foreign Affairs']
    },
    "Seema": {
        fullname: "Seema H",
        age: 30,
        married: true,
        hobbies: ['Cooking', "Painting", "Art & Craft"]
    },
    'kishan': {
        fullname: "Kishan ",
        age: 30,
        married: false,
        hobbies: ['football', 'video games']
    },
    'rajeev': {
        fullname: "Rajeevalochana",
        age: 70,
        married: true,
        hobbies: ["Watching TV"]
    }
}


let goToHell = new Promise(keysPromiseFunction);//creating new promise

function keysPromiseFunction(resolve, reject) {
    //callback function for promise
    setTimeout((objs) => {
        let keys = Object.keys(objs);
        (keys.length > 0) ? resolve(keys) : reject("Error while parsing keys from object")
    }, 2000, profiles);

}

function profilePromiseFunction(resolve, reject) {
    setTimeout((key, objs) => {
        (objs.hasOwnProperty(key)) ?
            resolve({ key, objs }) :
            reject(`Object by name ${key} does not exist`)

    }, 3000, "kishan", profiles);
}

function agePromiseFunction(resolve, reject) {
    setTimeout(( objs) => {
        (objs.hasOwnProperty("age")) ?
            resolve( objs ) :
            reject("Property by name age does not exist")
    }, 2000, profiles["kishan"]);
}

// function displayKeys(keys) {
//     console.log(keys);
//     return new Promise(profilePromiseFunction);
//     //callback Function for resolve
// }
// function displayProfile({ key, objs }) {
//     console.log(objs[key]);
//     return new Promise(agePromiseFunction)
// }

// function displayAge(obj) {
//     console.log(`Age of kishan is : ${obj["age"]}`);
// }

// function error(msg) {
//     //callback function for reject
//     console.log(msg);
// }
// goToHell.then(displayKeys).then(displayProfile).then(displayAge).catch(error); //Invoking the promise

// goToHell.then((keys)=> {
//     console.log(keys);
//     return new Promise(profilePromiseFunction);
// }).then (({key, objs})=>{
//     console.log(objs[key]);
//     return new Promise(agePromiseFunction)
// }).then((obj)=>{
//       console.log(`Age of kishan is : ${obj["age"]}`);
// }).catch((msgg) => {
//     console.log(msgg)
// });

async function execute() {
    let keys = await new Promise(keysPromiseFunction);
    console.log(keys);

    let {key, objs} = await new Promise(agePromiseFunction);
    console.log(objs[key]);

    let obj = await new Promise(agePromiseFunction);
    console.log(obj);


}

execute();