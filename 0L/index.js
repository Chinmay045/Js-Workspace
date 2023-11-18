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

function profilePromiseFunction (resolve,reject) {
    setTimeout((key, objs) => {
        (objs.hasOwnProperty(key)) ?
        resolve({key, objs}) :
        reject(`Object by name ${key} does not exist`)

    },3000, "kishan",profiles);
}

function displayKeys(keys) {
    console.log(keys);
    return new Promise(profilePromiseFunction);
    //callback Function for resolve
}
function displayProfile({key, objs}) {
    console.log(objs[key]);
}

function error(msg) {
    //callback function for reject
    console.log(msg);
}

goToHell.then(displayKeys).then(displayProfile).catch(error); //Invoking the promise