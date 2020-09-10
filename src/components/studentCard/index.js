import React from 'react'
import * as classes from './index.module.css'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import {useDispatch} from 'react-redux'
import {studentsDelete,studentsBeingEdited} from '../../redux/actions/students'

const StudentCard=({name,classRoom,section,rollNumber})=>{
    const dispatch= useDispatch()

    const editClick=()=>{
        dispatch(studentsBeingEdited(rollNumber))
    }

    const deleteClick=()=>{
        dispatch(studentsDelete(rollNumber))
    }

    return (
<div className={classes.card}>
    <div className={classes.title}>
        <div>{name} - {rollNumber}</div>
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
        <div className={classes.item}>
            <div className={classes.col}>classroom</div>
            <div className={classes.col}>{classRoom}</div>
        </div>
        <div className={classes.item}>
            <div className={classes.col}>section</div>
            <div className={classes.col}>{section}</div>
        </div>
    </div>
</div>
    )
}

export default StudentCard