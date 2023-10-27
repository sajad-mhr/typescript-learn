// let student: { id: number; name: string; family: string; scores: number[] }[] =
//   [
//     { id: 1, name: "sajad", family: "mehri", scores: [10, 20, 30] },
//     { id: 2, name: "reza", family: "aroozi", scores: [10, 20, 30] },
//     { id: 3, name: "alireza", family: "vahdani", scores: [10, 20, 30] },
//   ];
// class Student {
//   private name: string;
//   private family: string;
//   private age: number;
//   private scores: number[];
//   public constructor(
//     name: string,
//     family: string,
//     age: number,
//     scores: number[]
//   ) {
//     this.name = name;
//     this.family = family;
//     this.age = age;
//     this.scores = scores;
//   }
//   public GetName(): string {
//     return this.name;
//   }
//   public GetFamily(): string {
//     return this.family;
//   }
//   public GetAge(): number {
//     return this.age;
//   }
//   public CalcAvarage(): number {
//     let sum: number = 0;
//     for (let i: number = 0; i < this.scores.length; i++) {
//       sum += this.scores[i];
//     }
//     let avarage: number = +(sum / this.scores.length).toFixed(2);
//     return avarage;
//   }
// }
// let inputName: string = prompt("Enter Your Name : ");
// let inputFamily: string = prompt("Enter Your Family : ");
// let inputScoreCount: number = +prompt("Enter Score Count : ");
// let scores: number[] = [];
// for (let i: number = 1; i <= inputScoreCount; i++) {
//   let inputScore: number = +prompt(`Enter Score ${i} :`);
//   scores.push(inputScore);
// }
// let s1 = new Student(inputName, inputFamily, scores);
// console.log(
//   `${s1.GetName()} ${s1.GetFamily()} Avarage Is : ${s1.CalcAvarage()}`
// );
let students = [];
let state = confirm("به سیستم مدیریت دانش آموزان خوش آمدید. برای ادامه دکمه OK و برای خروج دکمه Cancel را فشار دهید.");
for (let i = 0; state; i++) {
    let f_name = prompt(`نام دانش آموز را وارد کنید : `);
    let l_name = prompt(`نام خانوادگی دانش آموز را وارد کنید : `);
    let inputScoreCount = +prompt("نمره چند درس را میخواهید وارد کنید؟ : ");
    let scoresArr = [];
    for (let j = 0; j < inputScoreCount; j++) {
        let inputScoreName = prompt(`نام درس را وارد کنید :`);
        let inputScore = +prompt(`نمره درس را وارد کنید :`);
        scoresArr[j] = {
            id: j,
            scoreName: inputScoreName,
            score: inputScore,
        };
    }
    students[i] = {
        userId: i,
        firstName: f_name,
        lastName: l_name,
        scores: scoresArr,
        avarage: CalcAvarage(scoresArr),
    };
    state = confirm("می خواهید یک دانش آموز دیگر اضافه کنید؟");
}
function CalcAvarage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i].score;
    }
    let avarage = +(sum / scores.length).toFixed(2);
    return avarage;
}
console.log(students.length === 0 ? "دانش آموزی یافت نشد" : students);
let table_row = document.getElementById("table-row");
let tr_temp = "";
students.forEach((user, index) => {
    tr_temp = `
              <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.avarage}</td>
              </tr>
              `;
    table_row.innerHTML += tr_temp;
});
