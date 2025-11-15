import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const Navigate = useNavigate();

    function handleChange(e){
        e.preventDefault();
    }

    const user = {username,password};
    localStorage.setItem("isLoggedIn","true");
    // useNavigate("/home");

  return (
    <div>
        <h2>Login</h2>
        <p>&nbsp;</p>
        <form>
            <input
                type='text'
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
            ></input>

            <p>&nbsp;</p>

                <input
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                ></input>

                    <button 
                        type='submit'
                        onClick={() => Navigate("/home")}
                    >Login</button>
        </form>
        <section>
            <p>Don't have an account?</p>
            <button
            onClick={() => Navigate("/")}
            >Register Now</button>
        </section>
    </div>
  )
}

export default Login