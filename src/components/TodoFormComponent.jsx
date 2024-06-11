import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getTodo, postTodo, updateTodo } from '../service/TodoService';

export const TodoFormComponent = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [completed,setCompleted] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

   

    const saveTodo = (e) => {
        e.preventDefault();
        const todo = {title,description,completed};
        if(id){
            updateTodo(id,todo).then(resp => {
                console.log(resp.data);
                navigate('/todos');
            }).catch(err => console.log(err));
        }else{
            postTodo(todo).then((resp) =>{
                console.log(resp.data);
                navigate("/todos");
            }).catch(err => console.log(err));
        }
       
    }

    useEffect(()=>{
        if(id){
            getTodo(id).then(resp =>{
                setTitle(resp.data.title);
                setDescription(resp.data.description);
                setCompleted(resp.data.completed);
            }).catch(err => console.log(err));
        }
    },[id]);

  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h3>{id ? 'Update Todo From':'Save Todo Form'}</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor="title" className='form-label'>Title</label>
                                    <input type="text" 
                                    className='form-control'
                                    id="title"
                                    name='title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="description" className='form-label'>Todo Description</label>
                                    <input type="text" 
                                    className='form-control'
                                    id="description"
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="completed" className='form-label'>Todo Complete</label>
                                    <select id="completed"
                                        className='form-control'
                                        value={completed}
                                        onChange={(e) => setCompleted(e.target.value)}
                                    >
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                    </select>
                                    </div>

                                    <button className='btn btn-success'
                                    onClick={saveTodo}
                                    >
                                        { id ? 'Update Todo':'Save Todo'}
                                    </button>
                                    
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
