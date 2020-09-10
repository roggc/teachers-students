import {STUDENTS_CREATE,STUDENTS_DELETE,STUDENTS_BEINGEDITED,STUDENTS_SAVE} 
from '../actions/students'

const initialState={
    students:[],
    beingEdited:false
}

const create=(state,action)=>{
    return {
        ...state,
        students:state.students.concat(action.student)
    }
}

const deleteStudent=(state,action)=>{
    const mutableStudents=state.students.filter(stu=>true)
    const student=mutableStudents.find(stu=>stu.rollNumber==action.rollNumber)
    mutableStudents.splice(mutableStudents.indexOf(student),1)
    return {
        ...state,
        students:mutableStudents,
        beingEdited:false
    }
}

const beingEdited=(state,action)=>{
    return {
        ...state,
        beingEdited:true,
        rollNumberOnEditing:action.rollNumber
    }
}

const save=(state,action)=>{
    const student=action.student
    const mutableStudents=state.students.filter(stu=>true)
    const studentToModify=mutableStudents.find(stu=>stu.rollNumber==student.rollNumber)
    studentToModify.name=student.name
    studentToModify.classRoom=student.classRoom
    studentToModify.section=student.section
    return {
        ...state,
        students:mutableStudents,
        beingEdited:false
    }
}

export default (state=initialState,action)=>{
    switch(action.type){
        case STUDENTS_CREATE:
            return create(state,action)
        case STUDENTS_DELETE:
            return deleteStudent(state,action)
        case STUDENTS_BEINGEDITED:
            return beingEdited(state,action)
        case STUDENTS_SAVE:
            return save(state,action)
        default:
            return state
    }
}