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
    const pairsAndThemes = [];
    const copyPairs = pairs.slice();

    pairsAndThemes.push(
        [copyPairs[0][0] + " і " + copyPairs[0][1] + ", " + theme[0]],
        [copyPairs[1][0] + " і " + copyPairs[1][1] + ", " + theme[1]],
        [copyPairs[2][0] + " і " + copyPairs[2][1] + ", " + theme[2]]
    );
    return pairsAndThemes
}
console.log("Зіставте пари та теми проєктів:", pairsPlusThemes(makePairs(students), themes));

function assignMarks (student, mark) {
    const studentsMarks = [];
    studentsMarks.push (
        [student[0], mark[0]],
        [student[1], mark[1]],
        [student[2], mark[2]],
        [student[3], mark[3]],
        [student[4], mark[4]],
        [student[5], mark[5]]
    );
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

