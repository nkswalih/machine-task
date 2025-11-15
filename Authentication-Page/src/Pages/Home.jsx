import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {

    const Navigate = useNavigate();
    const [user,setUser] = useState(null);

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user") || null));
    },[])

    const handleLogout = () => {
        localStorage.clear();
        Navigate("/login",{replace:true})
    };


  return (
    <div>
        
        <h1>Home</h1>
        <p>&nbsp;</p>
        {user ? <>
        <p>Welcome {user.username}</p>
        <button onClick={handleLogout}>Logout</button>
        </> : <>
        <p>Guest</p>
        <p>You don't have an account</p>
        <p>Please sign in</p>
        <button
        onClick={() => Navigate("/")}
        >Register now</button>
        </>}
        {/* { user ?  :  } */}
        

    </div>
  )
}

export default Home