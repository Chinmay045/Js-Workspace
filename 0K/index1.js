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


        setTimeout((key, objs) => {
            console.log(objs[key]);
            setTimeout((sub) => {
                console.log(`Age of kishan is : ${sub.age}`);
                setTimeout((sub) => {
                    console.log(`Hobbies of kishan are: ${sub.hobbies}`);
                }, 4000, sub)
            }, 2000, objs['kishan'])
        }, 3000, 'kishan', objs)
    }, 2000, props);
}

gotToHell(profiles);