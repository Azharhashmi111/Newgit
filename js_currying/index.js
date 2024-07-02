class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minPlacementAge) {
        // Return a curried function
        return (minMarks) => {
            return this.marks >= minMarks && this.age >= minPlacementAge;
        };
    }
}

// Do not touch anything below this line

function createNewStudents(name, age, marks) {
    const student = new Student(name, age, marks);
    console.log(student.setPlacementAge(18)(40));
}

async function readInput() {
    let inputString = '';

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
        const argumentsArr = inputArr[0].split(',');

        createNewStudents(argumentsArr[0], Number(argumentsArr[1]), Number(argumentsArr[2]));

        process.exit();
    });
}

readInput();
