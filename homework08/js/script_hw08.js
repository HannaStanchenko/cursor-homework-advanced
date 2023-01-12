class Student {
    constructor(fullName, university, course) {
        this.fullName = fullName,
        this.university = university,
        this.course = course,
        this.marks = [],
        this.marksCopy = [],
        this.isExpelledOrNot = true
    }
    getInfo() {
        return `Студент(ка) ${this.course}го курсу ${this.university}, ${this.fullName}`
    }
    get studentMarks() {
        if (!this.isExpelledOrNot) {
            return null
        } else {
            return this.marks
        }
    } 
    set studentMarks(value) {
        if (this.isExpelledOrNot) {
            this.marks.push(value)
        } else {
            return null
        }
    }
    getAverageMark() {
        const averageMark = (this.marks.reduce((acc, el) => acc+el)) / this.marks.length
        return averageMark
    }
    dismiss() {
        this.isExpelledOrNot = false
        this.marksCopy = this.marks
        this.marks = null
        return "Студента відраховано"
    }
    recover() {
        this.isExpelledOrNot = true
        this.marks = this.marksCopy
        return "Студента поновлено"
    }
}

class BudgetStudent extends Student {
    constructor(fullName, university, course) {
        super(fullName, university, course)
        setInterval(() => this.getScholarship(), 15000)
    }
    getScholarship() {
        if (this.isExpelledOrNot === true && this.marks.length !== 0 && this.getAverageMark() >= 4.0) {
            console.log("Ви отримали 1400 грн. стипендії")
        } 
    }
}

const student01 = new Student("Остап Родоманський Бендер", "Вищої Школи Психотерапії м.Одеса", 1);
const student02 = new BudgetStudent("Станченко Ганна Ігорівна", "Державного університету інтелектуальних технологій і зв'язку м.Одеса", 3);
for (let i = 0; i < 4; i++) {
    const minMark = 1;
    const maxMark = 5;
    student01.studentMarks = Math.floor((maxMark - minMark) * Math.random() + minMark)
};
student02.studentMarks = 5;

console.log(student01.getInfo());
console.log("Масив оцінок студента", student01.studentMarks);
console.log("Додаємо оцінку", student01.studentMarks = 5, student01.studentMarks);
console.log("Середній бал", student01.getAverageMark());
console.log(student01.dismiss());
console.log(student01.recover());
console.log("-------------------------");
console.log(student02.getInfo());
console.log("Середній бал", student02.getAverageMark());
