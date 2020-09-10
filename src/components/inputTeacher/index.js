import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {teachersCreate,teachersSave} from '../../redux/actions/teachers'
import Teacher from '../../model/teacher'
import * as classes from './index.module.css'
import Add from '@material-ui/icons/Add'
import Delete from '@material-ui/icons/Delete'

const InputTeacher=props=>{
    const beingEdited=useSelector(state=>state.teachers.beingEdited)
    const idOnEditing=useSelector(state=>state.teachers.idOnEditing)
    const teacherOnEditing=useSelector(
        state=>state.teachers.teachers.find(teach=>teach.id==
        idOnEditing))

    const [name,setName]=useState('')
    const [id,setId]=useState(0)
    const [classRoom,setClassRoom]=useState(0)
    const [section,setSection]=useState('')
    const [classrooms,setClassrooms]=useState([])

    const [nameIsValid,setNameIsValid]=useState(false)
    const [classRoomIsValid,setClassRoomIsValid]=useState(false)
    const [sectionIsValid,setSectionIsValid]=useState(false)
    const [classroomsIsValid,setClassroomsIsValid]=useState(false)

    useEffect(()=>{
        if(beingEdited){
            setName(teacherOnEditing.name)
            setId(teacherOnEditing.id)
            setClassrooms(teacherOnEditing.classrooms)
        }
    },[beingEdited,teacherOnEditing])

    const dispatch=useDispatch()

    const idExists=
    useSelector(state=>state.teachers.teachers.some(teach=>teach.id==id))

    const clearFields=()=>{
        setName('')
        setId(0)
        setClassrooms([])
    }

    const btnCreate=()=>{
        if(idExists){
            alert('this id already exists')
            return
        }
        const teacher=new Teacher(name,parseInt(id),classrooms)
        dispatch(teachersCreate(teacher))

        clearFields()
    }

    const btnSave=()=>{
        const teacher =new Teacher(name,idOnEditing,classrooms)
        dispatch(teachersSave(teacher))
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

    useEffect(()=>{
        const cond=classrooms.length>0
        setClassroomsIsValid(cond)
    },[classrooms])

    const addClassroom=()=>{
        if(classRoomIsValid&&sectionIsValid){
            setClassrooms(prev=>prev.concat({name:classRoom,section}))
            setClassRoom(0)
            setSection('')
        }
    }

    const removeClassroom=(name,section)=>{
        setClassrooms(prev=>{
            const mutableClassrooms=prev.filter(cla=>true)
            const classroom=
            mutableClassrooms.find(classroom=>classroom.name==name&&classroom.section==section)
            mutableClassrooms.splice(mutableClassrooms.indexOf(classroom),1)
            return mutableClassrooms
        })
    }

    return (
        <div>
            <div className="form-group">
            <label htmlFor="name"><strong>Name</strong></label>
            <input 
            id="name"
            type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className={'form-control '+(nameIsValid?'':classes.danger)}/>
            </div>
            <div className="form-group">
            <label htmlFor="id"><strong>Id</strong></label>
            <input 
            id="id"
            type="number" 
            className="form-control"
            value={id}
            onChange={e=>setId(e.target.value)}
            disabled={beingEdited}/>
            </div>
            <div className={classes.row+' form-group'}>
                <div className={classes.item}>
                    <label htmlFor="classroom-name"><strong>ClassRoom (1 to 12)</strong></label>
                    <input 
                    id="classroom-name"
                    type="number" 
                    className={'form-control '+(classRoomIsValid?'':classes.danger)}
                    value={classRoom}
                    onChange={e=>setClassRoom(e.target.value)}/>
                </div>
                <div className={classes.item}>
                    <label htmlFor="section"><strong>Section (A to F)</strong></label>
                    <input 
                    id="section"
                    className={'form-control '+(sectionIsValid?'':classes.danger)}
                    value={section.toUpperCase()}
                    onChange={e=>setSection(e.target.value)}
                    maxLength={1}/>
                </div>
                <div className={classes.item+' '+classes.pointeable}
                onClick={addClassroom}>
                    <Add/>
                </div>
            </div>
            <div className={classes.col+' form-group'}>
                    {classrooms.map(classroom=>
                        <div className={classes.row} key={classroom.name+classroom.section}>
                            <div>{classroom.name}</div>
                            <div>{classroom.section.toUpperCase()}</div>
                            <div className={classes.pointeable}>
                                <Delete 
                                onClick={removeClassroom.bind(this,classroom.name,classroom.section)}/>
                            </div>
                        </div>
                    )}
            </div>
            <button className="btn btn-primary"
            onClick={beingEdited?btnSave:btnCreate} 
            disabled={!nameIsValid||!classroomsIsValid}>
            {beingEdited?'Save':'Create'}
            </button>
        </div>
    )
}

export default InputTeacher