import React, { useEffect, useState } from 'react'
import { completed, deleteTodo, getAllTodos, incompleted } from '../service/TodoService';
import { useNavigate } from 'react-router-dom';

export const ListTodoComponent = () => {
    const [todos,setTodos] =useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        listTodos();
    },[]);

    const listTodos = () => {
        getAllTodos().then((resp) => setTodos(resp.data))
        .catch(error => console.log(error));
    }

    const addNewTodo = () => navigate('/add-todo');
    
    const removeTodo = (id) => deleteTodo(id).then(resp => listTodos())
    .catch(err => console.log(err));

    const updateTodo = (id) => navigate(`/update-todo/${id}`);

    const completedTodo = (id) => completed(id).then(resp => listTodos())
    .catch(err => console.log(err));

    const incompletedTodo = (id) => incompleted(id).then(resp => listTodos())
    .catch(err => console.log(err));



    
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <button className='btn btn-primary mb-3'
                    onClick={addNewTodo}>Add Todo</button>
                    <div className="card">
                        <div className="card-header">
                            <h3>TodoList</h3>
                        </div>
                        <table className='table table-striped mb-3'>
                            <thead>
                                <tr>
                                    <th>Todo Title</th>
                                    <th>Todo Description</th>
                                    <th>Todo Completed</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map(todo =>(
                                        <tr key={todo.id}>
                                            <td>{todo.title}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.completed ?'YES':'NO'}</td>
                                            <td><button className='btn btn-outline-danger me-2'
                                            onClick={() => removeTodo(todo.id)}
                                            >Delete</button>
                                            <button className='btn btn-outline-success me-2'
                                            onClick={() => updateTodo(todo.id)}>Update</button>
                                            <button className='btn btn-outline-info'
                                            onClick={() => completedTodo(todo.id)}>Completed</button>
                                            <button 
                                            onClick={() => incompletedTodo(todo.id)}
                                            className='btn btn-outline-secondary'>InCompleted</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
