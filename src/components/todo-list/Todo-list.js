import PropTypes, { func } from "react";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

 

function TodoList() {
    //
    const [inputValue, setInputValue] = useState("")
    const [todoList, setTodoList] = useState([]);
    
    // space
    const space = {
        margin: "5px"
    }

    // j'ajoute des id à mes élément de la liste
    const handlekeyDown = (event) => {
        if (event.keyCode === 13) {
      setTodoList([...todoList, { id: uuidv4(), text: inputValue, isCompleted: false }]);
      setInputValue('');
    }
    };

    const handleTodoClick = (id) => {
    setTodoList(
        todoList.map(todo => {
          if (todo.id === id) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        })
      );
    };
  
    const handleRemoveTodo = (id) => {
      setTodoList(todoList.filter(todo => todo.id !== id));
    };

    // clear completed
    const handleClearCompleted = () => {
        setTodoList(todoList.filter(todo => !todo.isCompleted));
      };
      
 
    return (
    <>
          <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input class="new-todo" placeholder="What needs to be done?"type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handlekeyDown}  autofocus />
                </header>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">

                    
                    {todoList.map(todo => (
                       <li key={todo.id} className={todo.isCompleted ? "completed" : ""} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>
						<div className="view">
                            {/* Monsieur si ce commentaire n'est pas retirer c'est que j'ai pas su remettre l'image du check */}
                          <input className="toggle"  type="checkbox" checked/>
                         <span style={{ color: "completed" ? 'gray' : 'black' }} onClick={() => handleTodoClick(todo.id)}><label>{todo.text}</label></span>
                         <button className="destroy" onClick={() => handleRemoveTodo(todo.id)}/>
                         </div>
                       </li>
                        ))
                    }
                        
                        {/* <li className="completed">
					    	<div className="view">
					    		<input className="toggle" type="checkbox" checked />
					    		<label>Taste JavaScript</label>
					    		<button className="destroy"  onClick={() => handleRemoveTodo()}></button>
					    	</div>
					    	<input className="edit" value="Create a TodoMVC template" />
					    </li>
        
                        <li>
                            <div className="view">
                                <input className="toggle" type="checkbox"/>
                                <label>Buy a unicorn</label>
                                <button className="destroy" ></button>
                            </div>
                            <input className="edit" value="Rule the web" />
                        </li> */}

                        
                    </ul>
                </section>

                <footer className="footer">

                    <span className="todo-count"> <span style={space}> {todoList.filter(todo => !todo.isCompleted).length} </span> item left</span>

                    <ul className="filters">
                       {todoList.map(todo => (
                        <li key={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                        </li>
                        ))}
                    </ul>

                    <button className="clear-completed" onClick={handleClearCompleted}>Clear completed ({todoList.filter(todo => todo.isCompleted).length})</button>
                </footer>
          </section>

        <footer className="info">
            <p>Double-click to edit a todo</p>
            <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
            <p>Created by <a href="http://todomvc.com">you</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer> 
    </>
);
} 

export default TodoList;
