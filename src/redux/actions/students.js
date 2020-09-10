export const STUDENTS_CREATE='STUDENTS_CREATE'
export const STUDENTS_DELETE='STUDENTS_DELETE'
export const STUDENTS_BEINGEDITED='STUDENTS_BEINGEDITED'
export const STUDENTS_SAVE='STUDENTS_SAVE'

export const studentsCreate=(student)=>({
    type:STUDENTS_CREATE,
    student
})

export const studentsDelete=(rollNumber)=>({
    type:STUDENTS_DELETE,
    rollNumber
})

export const studentsBeingEdited=(rollNumber)=>({
    type:STUDENTS_BEINGEDITED,
    rollNumber
})

export const studentsSave=(student)=>({
    type:STUDENTS_SAVE,
    student
})