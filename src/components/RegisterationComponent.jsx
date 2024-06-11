import React, { useState } from 'react'
import { resgiter_user } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';

export const RegisterationComponent = () => {
    const [name,setName] = useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const register = e =>{
        e.preventDefault();
        const user = {name,username,email,password};
        //console.log(user);
        resgiter_user(user)
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err));
        navigate('/login');
    }

  return (
    <div>
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <form>
                        <div className='mb-3'>
                           <label className='form-label'>Name</label>
                           <input type="text"
                           className='form-control'
                           name="name"
                           value={name}
                           onChange={ e => setName(e.target.value)} 
                           />
                        </div>
                        <div className='mb-3'>
                           <label className='form-label'>Username</label>
                           <input type="text"
                           className='form-control'
                           name="username"
                           value={username}
                           onChange={ e => setUsername(e.target.value)} 
                           />
                        </div>
                        <div className='mb-3'>
                           <label className='form-label'>Email</label>
                           <input type="text"
                           className='form-control'
                           name="email"
                           value={email}
                           onChange={ e => setEmail(e.target.value)} 
                           />
                        </div>
                        <div className='mb-3'>
                           <label className='form-label'>Password</label>
                           <input type="password"
                           className='form-control'
                           name="password"
                           value={password}
                           onChange={ e => setPassword(e.target.value)} 
                           />
                        </div>

                        <button className='btn btn-primary w-100'
                        onClick={ e => register(e)}>Register</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
