const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function makePairs (array = []) {
    const pairsArray = [];
    pairsArray.push(
        [array[0], array[2]], 
        [array[1], array[3]], 
        [array[4], array[5]]
        );
    return pairsArray
}
console.log("Розділіть студентів на пари:", makePairs(students));

function pairsPlusThemes (pairs, theme) {
    let pairsAndThemes = [];
    let copyPairs = pairs.slice();
    let copyThemes = theme.slice();
    for (let i = 0; i < copyPairs.length; i++) {
        pairsAndThemes.push([copyPairs[i].join(" i "), copyThemes[i]])
    }
    return pairsAndThemes
}
console.log("Зіставте пари та теми проєктів:", pairsPlusThemes(makePairs(students), themes));

function assignMarks (student, mark) {
    const studentsMarks = [];
    for (let i = 0; i < student.length; i++) {
        studentsMarks.push([students[i], mark[i]])
    }
    return studentsMarks
}
console.log("Зіставте оцінки зі студентом:", assignMarks(students, marks));

function randomPairsMarks (studentsThemes) {
    const randomMarks = studentsThemes.slice();
    const minMark = 1;
    const maxMark = 5;
    for (let i = 0; i < studentsThemes.length; i++) {
        const calculateRandomMark = Math.floor((maxMark - minMark) * Math.random() + minMark);
        randomMarks[i].push(calculateRandomMark);
    }
    return randomMarks
}
console.log("Поставте кожній парі випадкову оцінку:", randomPairsMarks(pairsPlusThemes (makePairs(students), themes)));

