import React, { useState } from "react";
import TodoList from "./TodoList";
const App = () => {
    const [inputList, setInputList] = useState("buy apple");
    const [Items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);

    }
    const listofItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList("");

    }
    const deleteItems = (id) =>{
        console.log("go")

        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !== id;
 
            })
        })

    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" value={inputList} onChange={itemEvent} placeholder="Enter a Todo Item" />
                    <button onClick={listofItems} > + </button>

                    <ol>
                        {Items.map((itemval, index) => {
                            return <TodoList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect= {deleteItems}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;