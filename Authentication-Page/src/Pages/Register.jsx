import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Register() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const Navigate = useNavigate();

    function handleChange(e){
        e.preverntDefault();
    }

    const user = {username,password};
    localStorage.setItem("user",JSON.stringify(user))

    // useNavigate("/login");

  return (

    <div>
        <h2>Register</h2>
        <p>&nbsp;</p>
        <form>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            ></input>
            <p>&nbsp;</p>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                ></input>

                    <button
                        type="submit"
                        onClick={() => Navigate("/login")}
                    >Register</button>

        </form>

    </div>
  );
}

export default Register