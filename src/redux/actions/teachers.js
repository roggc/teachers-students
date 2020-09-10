export const TEACHERS_CREATE='TEACHERS_CREATE'
export const TEACHERS_DELETE='TEACHERS_DELETE'
export const TEACHERS_BEINGEDITED='TEACHERS_BEINGEDITED'
export const TEACHERS_SAVE='TEACHERS_SAVE'

export const teachersCreate=(teacher)=>({
    type:TEACHERS_CREATE,
    teacher
})

export const teachersDelete=(id)=>({
    type:TEACHERS_DELETE,
    id
})

export const teachersBeingEdited=(id)=>({
    type:TEACHERS_BEINGEDITED,
    id
})

export const teachersSave=(teacher)=>({
    type:TEACHERS_SAVE,
    teacher
})