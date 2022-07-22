import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodoAction} from '../actions/ToDoActions';
import {RemoveAction} from '../actions/ToDoActions';  
import pic from "../editing.png";
import pics from "../delete.png";
 
 
function Taskform(){

  const [task, setTodo] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo; 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(task, date, time)); 
    if (task !==""){
      setTodo("");
    }if (date !==""){
      setDate("");
    }if (time !==""){
      setTime("");
    }    
  };

  const removeHandler = (t) => {
    dispatch(RemoveAction(t));
  };   

  const edit = (id) => {
    const editTodo = todos.find((i) => i.id ===id);
    setTodo(editTodo.task); 
    setDate(editTodo.date); 
    setTime(editTodo.time); 
    
    document.getElementById("Tform").style.display="block";
  }


  const hidden = () =>{
    document.getElementById("Tform").style.display="none";
  } 
  const show = () =>{
    document.getElementById("Tform").style.display="block";
  } 
  const ref = () =>{
    document.getElementById("Tform").style.display="none";
  } 
 
 
 
  return <div className='main'>
     <div className='head' id='head'>
        <b>TASKS</b> <span>0</span>
        <button onClick={()=>show()}>+</button>
     </div>
     <div className='task-form' id='Tform'>
        <form  onSubmit={handleSubmit}>
          <div>
            <b>Task Description</b> <br></br>
            <input type ='text' value={task} onChange={(e) => setTodo(e.target.value)} />
          </div>
          <div className='flex'>
            <li>
              <b>Date</b> <br></br>
              <input type ='date' value={date} onChange={(e) => setDate(e.target.value)} />
            </li>
            <li>
              <b>Time</b> <br></br>
              <input type ='time' value={time} onChange={(e) => setTime(e.target.value)} />
            </li>
          </div>
          <div>
            <b>Assign User</b> <br></br>
            <input type ='text' />
          </div>

          <div className='task-btn'>
             <li> <p className='cancel' onClick={()=>hidden()}>Cancel</p> </li> 
             <li> <button className='save' onClick={()=>ref()}>Save</button> </li> 
          </div>
        </form>
     </div>
     <ul className='task-list'>
        {todos && 
          todos.map((t) =>(
            <div key={t.id}>
              <b>{t.task}</b> <br></br>
              <span>{t.date}</span>
              <button onClick={()=>removeHandler(t)}> <img src={pics} /></button>
              <button onClick={()=>edit(t.id)}> <img src={pic} /></button>
            </div>
        ))}
     
     </ul>
  </div>
}

export default Taskform;