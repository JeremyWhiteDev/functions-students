const createStudent = (objName, objGrade) => {
    return {
        name: objName,
        grade: objGrade
    };
}

const addMathGrade = (obj) => {
    obj.math  = "B";
}

const addHistoryGrade = (obj) => {
    obj.history  = "C";
}

const addScienceGrade = (obj) => {
    obj.science = "A";
}

const jeremy = createStudent("jeremy",9)

console.log(jeremy);

addMathGrade(jeremy);
console.log(jeremy);

addHistoryGrade(jeremy);
console.log(jeremy);

addScienceGrade(jeremy);
console.log(jeremy);

