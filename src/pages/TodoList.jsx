import React, { useState } from "react";
import {useLoaderData } from "react-router-dom";
  

const TodoList = () => {
    
    const initTodoList = () => {
        const list = [];
        for (let i = 0; i < 20; ++i) {
            list.push({ ind: i, val: "item " + i })
        }
        return list;
    };

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(initTodoList);
    
    const inputOnChange = (event) => {
        setTodo(event.target.value);
    };
    const btnOnClick = (event) => {
        setTodos([{ ind: todos.length, val: todo }, ...todos]);
        console.log(todos);
    };
    const loaderVal = useLoaderData();
    console.log('loader value from component: '+loaderVal);

    return (        
        <div className="container text-center">
            <div className="row row-cols-auto">
                <div className="col-10">
                    <div className="input-group mt-6">
                        <span className="input-group-text" id="inputGroup-sizing-default">Enter Item:</span>
                        <input type="text" value={todo} className="form-control" aria-label="Sizing example input" onChange={inputOnChange} aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div>
                <div className="col-2 ">
                    <button className="btn btn-primary btn-md align-items-start" onClick={btnOnClick} >Add</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <select className="form-select" size="20" aria-label="size 3 select example">
                        {todos.map((item) => <option value={item.ind}>{item.val}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TodoList;

