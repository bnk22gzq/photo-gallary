import React, { useState } from 'react'

import { NavLink ,useNavigate} from 'react-router-dom'
import { ReactComponent as Login } from '../../assets/Login.svg'
import { ReactComponent as Hamburger } from '../../assets/menu.svg'
import { ReactComponent as Brand } from '../../assets/log_icon.svg'


import './index.css'

const Navbar = () => {
  const [isActive,setisActive]=useState(false);
  const navigate = useNavigate();
  const isphotouploadpage=localStorage.getItem('PhotoUploadPage');      //for the photoupload page is open or not

  const logout=()=>{
    alert('logout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.removeItem('PhotoUploadPage');
    navigate('/home')
  }
  return (

    <nav className= "navbar" style={{overflow:'hidden'}}>
      <div className="container">
        <div>
          {isphotouploadpage?<div style={{display:'flex',textDecoration:'none'}}><h2 style={{color:'#F5A425',paddingLeft:'10px',alignSelf:'center'}}>PHOTO </h2><h2 style={{color:'#FFFFFF',paddingLeft:'10px',alignSelf:'center'}}> GALLARY</h2> </div>:<NavLink to='/home' style={{display:'flex',textDecoration:'none'}}><h2 style={{color:'#F5A425',paddingLeft:'10px',alignSelf:'center'}}>PHOTO </h2><h2 style={{color:'#FFFFFF',paddingLeft:'10px',alignSelf:'center'}}> GALLARY</h2></NavLink>}
         
        
        </div>
        <div  className='login' >
          {isphotouploadpage?<button onClick={logout}>logout</button>:<NavLink to='/login' style={({ isActive }) => isActive ? setisActive(true) : setisActive(false)
        } ><Login className={isActive? 'loginlogo': ''}/></NavLink>}
          
        </div>
      </div>
      
    </nav>
    
  )
}

export default Navbar
