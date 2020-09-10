import {TEACHERS_CREATE,TEACHERS_DELETE,TEACHERS_BEINGEDITED,TEACHERS_SAVE} 
from '../actions/teachers'

const initialState={
    teachers:[],
    beingEdited:false
}

const create=(state,action)=>{
    return {
        ...state,
        teachers:state.teachers.concat(action.teacher)
    }
}

const deleteTeacher=(state,action)=>{
    const mutableTeachers=state.teachers.filter(teacher=>true)
    const teacher=mutableTeachers.find(teach=>teach.id==action.id)
    mutableTeachers.splice(mutableTeachers.indexOf(teacher),1)
    return {
        ...state,
        teachers:mutableTeachers,
        beingEdited:false
    }
}

const beingEdited=(state,action)=>{
    return {
        ...state,
        beingEdited:true,
        idOnEditing:action.id
    }
}

const save=(state,action)=>{
    const teacher=action.teacher
    const mutableTeachers=state.teachers.filter(teach=>true)
    const teacherToModify=mutableTeachers.find(teach=>teach.id==teacher.id)
    teacherToModify.name=teacher.name
    teacherToModify.classrooms=teacher.classrooms
    return {
        ...state,
        teachers:mutableTeachers,
        beingEdited:false
    }
}

export default (state=initialState,action)=>{
    switch(action.type){
        case TEACHERS_CREATE:
            return create(state,action)
        case TEACHERS_DELETE:
            return deleteTeacher(state,action)
        case TEACHERS_BEINGEDITED:
            return beingEdited(state,action)
        case TEACHERS_SAVE:
            return save(state,action)
        default:
            return state
    }
}