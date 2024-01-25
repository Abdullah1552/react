import React from 'react'
import { useState } from 'react'
import AuthUser from './AuthUser'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Account() {
    const navigate = useNavigate();
    const { http } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const submitForm = () => {
        http.post('/register', { name: name, email: email, password: password }).then((res) => {
            // console.log(res.data);
            navigate('/login');
            // setToken(res.data.user, res.data.access_token);
        })
    }
    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token != undefined) {
            logout();
        }
    }
    const { user } = AuthUser();
    // const { http } = AuthUser();
    const [userdetail, setUserdetail] = useState('');

    useEffect(() => {
        fetchUserDetail();
    }, []);

    const fetchUserDetail = () => {
        http.post('/me').then((res) => {
            setUserdetail(res.data);
        });
    }

    function renderElement() {
        if (userdetail) {
            return <>
                {/* <div className="form2"> */}
                    <h2>Account Details :</h2>
                    <div className="form-detail">
                        <div className="col">
                            <p>Username</p>
                            <h1>{userdetail.name}</h1>
                        </div>
                        <div className="col">
                            <p>Email</p>
                            <h1>{userdetail.email}</h1>
                        </div>
                    </div>
                    <button type="button" onClick={logoutUser}>Logout</button>
                {/* </div> */}
            </>
        } else {
            return <p>Loading.....</p>
        }

    }
    return (
        <>
            <section className='main1'>
                <h1 className='first-heading'>Login to your Account</h1>
                <p style={{ color: 'black' }}>Login or Register</p>
                <div className="forms">
                    <div className="form1">
                        <label htmlFor="">Name :</label> <br />
                        <input type="txt" placeholder='Enter name' id='name' onChange={e => setName(e.target.value)} />
                        <label htmlFor="">Email :</label> <br />
                        <input type="email" placeholder='Enter email' id='email' onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="">Password :</label> <br />
                        <input type="password" placeholder='Enter password' id='password' onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="">Confirm Password :</label> <br />
                        <input type="password" placeholder='Confirm Password' />
                        <p style={{ marginBottom: '5px' }}>Already Have an Account <a href="/login">Login</a>                        </p>
                        <button type='button' onClick={submitForm} >Register</button>

                    </div>
                    <div className="form2">
                        {renderElement()}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Account