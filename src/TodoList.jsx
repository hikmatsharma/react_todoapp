import React from "react";
const TodoList = (props)=>{
    
    return (
    <>
    <div className="todo_style">
    <i className="fa-times" onClick={()=>{
        props.onSelect(props.id)
    }} >X</i>
    <li>{props.text} </li>
    </div>
    
    </>)
}
export default TodoList;