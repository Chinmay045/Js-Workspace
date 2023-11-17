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

function gotToHell(props) {
    setTimeout((objs) => {
        let keys = Object.keys(objs);
        console.log(keys);
    }, 2000,props);
}

gotToHell(profiles);