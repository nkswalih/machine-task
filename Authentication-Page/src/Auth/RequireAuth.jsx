import React from 'react'
import {useNavigate} from 'react-router-dom'

const RequireAuth = ({ children }) => {

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return isLoggedIn ? children : <navigate to="/login" replace />;


  return (
    <div>RequireAuth</div>
  )
}

export default RequireAuth