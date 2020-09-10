import React from 'react'
import {useSelector} from 'react-redux'
import StudentCard from '../studentCard'
import InputStudent from '../inputStudent'
import * as classes from './index.module.css'

const Students=props=>{
    const allStudents=useSelector(state=>state.students.students)
    return (
        <div className={classes.cont}>
            <div className={classes.col+' '+classes.left}>
                <InputStudent/>
            </div>
            <div className={classes.studentsList+' '+classes.col+' '+classes.right}>
                <div className={classes.item}>
            {
                allStudents.map(student=>
                <StudentCard key={student.rollNumber}
                name={student.name} classRoom={student.classRoom}
                section={student.section} rollNumber={student.rollNumber}/>)
            }
            </div>
            </div>
        </div>
    )
}

export default Students