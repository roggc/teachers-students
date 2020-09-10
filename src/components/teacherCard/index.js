import React from 'react'
import * as classes from './index.module.css'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import {useDispatch} from 'react-redux'
import {teachersDelete,teachersBeingEdited} from '../../redux/actions/teachers'

const TeacherCard=({name,classrooms,id})=>{
    const dispatch= useDispatch()

    const editClick=()=>{
        dispatch(teachersBeingEdited(id))
    }

    const deleteClick=()=>{
        dispatch(teachersDelete(id))
    }

    return (
<div className={classes.card}>
    <div className={classes.title}>
        <div>{name}</div>
        <div>
            <Edit 
            className={classes.selectable}
            onClick={editClick}/>{' '}
            <Delete 
            className={classes.selectable}
            onClick={deleteClick}/>
        </div>
    </div>
    <div className={classes.body}>
        {classrooms.map(classroom=>
        <div className={classes.item} key={classroom.section+classroom.name}>
            <div className={classes.col}>
                {classroom.name} 
                {classroom.section.toUpperCase()}</div>
        </div>)}
    </div>
</div>
    )
}

export default TeacherCard