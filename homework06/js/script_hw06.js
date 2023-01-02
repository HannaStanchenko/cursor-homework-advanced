const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
    }
];

// Функція, яка повертає список предметів для конкретного студента
function getSubjects(student) {
    const subjectsNameFromObj = Object.keys(student.subjects);
    subjectsName = subjectsNameFromObj.map(el => (el).charAt(0).toUpperCase() + el.slice(1).replace("_", " "));
    return subjectsName.join(", ")
}
console.log("Список предметів студента:", getSubjects(students[0]));

// Функція, яка повертає середню оцінку по всім предметам для переданого студента 
function getAverageMark(studentMarks) {
    const marksFromObj = Object.values(studentMarks.subjects);
    const marks = [...marksFromObj[0], ...marksFromObj[1], ...marksFromObj[2]];
    const averageMark = +((marks.reduce((acc, el) => acc + el, 0)) / marks.length).toFixed(2);
    return averageMark
}
console.log("Середня оцінка по всім предметам:", getAverageMark(students[0]));

// Функція, яка повертає інформацію загального виду по переданому студенту
function getStudentInfo(student) {
    const info = {
        course: student.course,
        name: student.name,
        "average mark" : getAverageMark(student)
    };
    return info
}
console.log("Інформація про студента:", getStudentInfo(students[0]));

// Функція, яка повертає імена студентів у алфавітному порядку
function getStudentsNames() {
    let studentsNames = students.map((el) => {
        const {name, ...rest} = el;
        return name
    });
    studentsNames = studentsNames.sort();
    return studentsNames
}
console.log("Імена студентів у алфавітному порядку:", getStudentsNames(students[0]));

//Функція, яка повертає кращого студента зі списку по показнику середньої оцінки
function getBestStudent() {
    const studentsAverageMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentsAverageMarks.push(getAverageMark(students[i]))
    }
    const bestMark = Math.max(...studentsAverageMarks);
    const namesPlusMarks = students.map((el) => {
        const info = getStudentInfo(el);
        const {course, ...rest} = info;
        return rest
    });
    const findBestStudent = namesPlusMarks.find(obj => {
        return obj["average mark"] === bestMark
    });
    return findBestStudent.name

}
console.log("Кращий студент по показнику середньої оцінки:", getBestStudent());

// Cтворіть функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значення –кількість їх повторень
function calculateWordLetters (word) {
    wordArr = word.toLowerCase().split("");
    const result = {};
    wordArr.forEach((el) => {
        if (result[el] != undefined) ++result[el];
        else result[el] = 1;
    });
    return result
}
console.log("Результат:", calculateWordLetters("тест"));