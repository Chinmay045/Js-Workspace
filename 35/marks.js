
db.studentDetails.insertMany([
    {
        name: "Amar",
        result: "pass",
        score: { english: 25, maths: 23, science: 25 },
        grade: [{ class: "A", total: 73 }]

    },
    {
        name: "Akbar",
        result: "pass",
        score: { english: 24, maths: 25, science: 25 },
        grade: [{ class: "A", total: 74 }]
    },
    {
        name: "Anthony",
        result: "fail",
        score: { english: 12, maths: 13, science: 15 },
        grade: [{ class: "C", total: 40 }]
    }
])