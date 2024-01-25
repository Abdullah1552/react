import React from 'react'
import { useState } from 'react'
import AuthUser from './AuthUser'
import axios from 'axios'
function Login() {
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submitForm = () => {
        http.post('/login', { email: email, password: password }).then((res) => {
            // console.log(res.data);
            setToken(res.data.user, res.data.access_token);
        })
    }
    return (
        <>
            <section className='main1'>
                <h1 className='first-heading'>Login to your Account</h1>
                <p style={{ color: 'black' }}>Login or Register</p>
                <div className="forms">
                    <div className="form1">
                        
                        <label htmlFor="">Email :</label> <br />
                        <input type="email" placeholder='Enter email' id='email' onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="">Password :</label> <br />
                        <input type="password" placeholder='Enter password' id='password' onChange={e => setPassword(e.target.value)} />
                        <button type='button' onClick={submitForm}>Login</button>
                    </div>
                    {/* <div className="form2">
                        <h2>Account Details :</h2>
                        <div className="form-detail">
                            <div className="col">
                                <p>Username</p>
                                <h1>Mdabd1552</h1>
                            </div>
                            <div className="col">
                                <p>Email</p>
                                <h1>mdabd1552@gmail.com</h1>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Login