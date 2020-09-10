import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {studentsCreate,studentsSave} from '../../redux/actions/students'
import Student from '../../model/student'
import * as classes from './index.module.css'

const InputStudent=props=>{
    const beingEdited=useSelector(state=>state.students.beingEdited)
    const rollNumberOnEditing=useSelector(state=>state.students.rollNumberOnEditing)
    const studentOnEditing=useSelector(
        state=>state.students.students.find(stu=>stu.rollNumber==
        rollNumberOnEditing))

    const [name,setName]=useState('')
    const [rollNumber,setRollNumber]=useState(0)
    const [classRoom,setClassRoom]=useState(0)
    const [section,setSection]=useState('')

    const [nameIsValid,setNameIsValid]=useState(false)
    const [classRoomIsValid,setClassRoomIsValid]=useState(false)
    const [sectionIsValid,setSectionIsValid]=useState(false)

    useEffect(()=>{
        if(beingEdited){
            setName(studentOnEditing.name)
            setRollNumber(studentOnEditing.rollNumber)
            setClassRoom(studentOnEditing.classRoom)
            setSection(studentOnEditing.section)
        }
    },[beingEdited,studentOnEditing])

    const dispatch=useDispatch()

    const rollNumberExists=
    useSelector(state=>state.students.students.some(stu=>stu.rollNumber==rollNumber))

    const clearFields=()=>{
        setName('')
        setRollNumber(0)
        setClassRoom(0)
        setSection('')
    }

    const btnCreate=()=>{
        if(rollNumberExists){
            alert('this roll number already exists')
            return
        }
        const student=new Student(name,parseInt(rollNumber),classRoom,section)
        dispatch(studentsCreate(student))

        clearFields()
    }

    const btnSave=()=>{
        const student =new Student(name,rollNumberOnEditing,classRoom,section)
        dispatch(studentsSave(student))
        clearFields()
    }

    useEffect(()=>{
        const cond=name.length>0
        setNameIsValid(cond)
    },[name])

    useEffect(()=>{
        const classNum=parseInt(classRoom)
        const cond=classNum>0&&classNum<13
        setClassRoomIsValid(cond)
    },[classRoom])

    useEffect(()=>{
        const patt=/[A-F]/i
        const valid=patt.test(section)
        setSectionIsValid(valid)
    },[section])

    return (
        <div>
            <label htmlFor="name"><strong>Name</strong></label>
            <input 
            id="name"
            type="text" 
            value={name}
            onChange={e=>setName(e.target.value)}
            className={'form-control '+(nameIsValid?'':classes.danger)}/>
            <br/>
            <label htmlFor="rollNumber"><strong>Roll Number</strong></label>
            <input 
            id="rollNumber"
            type="number" 
            className="form-control"
            value={rollNumber}
            onChange={e=>setRollNumber(e.target.value)}
            disabled={beingEdited}/>
            <br/>
            <label htmlFor="classroom"><strong>ClassRoom (1 to 12)</strong></label>
            <input 
            id="classroom"
            type="number" 
            className={'form-control '+(classRoomIsValid?'':classes.danger)}
            value={classRoom}
            onChange={e=>setClassRoom(e.target.value)}/>
            <br/>
            <label htmlFor="section"><strong>Section (A to F)</strong></label>
            <input 
            id="section"
            className={'form-control '+(sectionIsValid?'':classes.danger)}
            value={section.toUpperCase()}
            onChange={e=>setSection(e.target.value)}
            maxLength={1}/>
            <br/>
            <button className="btn btn-primary"
            onClick={beingEdited?btnSave:btnCreate} 
            disabled={!nameIsValid||!classRoomIsValid||!sectionIsValid}>
            {beingEdited?'Save':'Create'}
            </button>
        </div>
    )
}

export default InputStudent