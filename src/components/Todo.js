import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import { addTodo, deleteTodo, removeTodo } from '../actions';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    return (
        <>
      <div childName="main-div">
      <div className="child-div">
        <figure>
          <figcaption> Add your list here! </figcaption>
        </figure>
      
      <div className="addItems">
        <input type="text" placeholder=" Add Items.."
        value={inputData} onChange={(event)=> setInputData(event.target.value)} />
         <i className="fa fa-plus add-btn "
         onClick={()=> dispatch(addTodo(inputData))}></i>
      </div>

      </div> 
    </div>
    </>
        
    )
}

export default Todo
