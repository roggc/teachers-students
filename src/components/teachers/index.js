import React from 'react'
import {useSelector} from 'react-redux'
import TeacherCard from '../teacherCard'
import InputTeacher from '../inputTeacher'
import * as classes from './index.module.css'

const Teachers=props=>{
    const allTeachers=useSelector(state=>state.teachers.teachers)
    return (
        <div className={classes.cont}>
            <div className={classes.col+' '+classes.left}>
                <InputTeacher/>
            </div>
            <div className={classes.teachersList+' '+classes.col+' '+classes.right}>
                <div className={classes.item}>
            {
                allTeachers.map(teacher=>
                <TeacherCard key={teacher.id}
                name={teacher.name} classrooms={teacher.classrooms}
                id={teacher.id}/>)
            }
            </div>
            </div>
        </div>
    )
}

export default Teachers