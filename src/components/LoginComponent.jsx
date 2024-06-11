import React, { useState } from 'react'
import { login_api_call, storeToken } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';

export const LoginComponent = () => {
  const [userNameOrEmail,setUsernameOrEmail]=useState('');
  const [passowrd,setPassord] = useState('');
  const navigate = useNavigate();

    async function login (e) {
    e.preventDefault();

    await login_api_call(userNameOrEmail,passowrd)
    .then(resp =>{
    
      const token = 'Basic ' + window.btoa(userNameOrEmail+":"+passowrd);
      storeToken(token);
      navigate('/todos');
      window.location.reload(false);
    }).catch(err => console.log(err));
  }
 

  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form>
              <div className='mb-3'>
                 <label>Username or Email</label>
                 <input type="text"
                 name="userNameOrEmail"
                 value={userNameOrEmail}
                 onChange={e => setUsernameOrEmail(e.target.value)} 
                 className='form-control'/>
              </div>
              <div className='mb-3'>
                 <label>Password</label>
                 <input type="text"
                 name="password"
                 value={passowrd}
                 onChange={e => setPassord(e.target.value)} 
                 className='form-control'/>
              </div>
              <button className='btn btn-primary w-100'
              onClick={e => login(e)}
              >Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
