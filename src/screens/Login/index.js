import React, { useState } from 'react'
import { BiLockAlt } from "react-icons/bi";
import {HiOutlineMail} from "react-icons/hi";
import './index.css';
import photoupload from'../../screens/PhotoUpload'
import { useNavigate } from 'react-router-dom';
import {loginUser}from '../../component/api'
import swal from 'sweetalert';


export default function Login()
{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e)=> {
            e.preventDefault();
            try
            {
                const response=await loginUser({
                    email,
                    password
                  });
              
                
                
                  if (response?.data) {
                        localStorage.setItem('accessToken', response.data['token']);
                        localStorage.setItem('user', response.data);
                        navigate('/PhotoUpload');
                        
                  } 
                  else 
                  {
                        if (response.response.data.message === 'User not found')
                         {
                           
                           alert("User not found");
                            console.log("user not found");
                           
                        } 
                        else if (response.response.data.message === 'Invalid password') 
                        {
                           
                            alert("Invalid password");
                            console.log("Invalid password");
                        } 
                        else 
                        {
                            swal("Failed", response.response.data.message, "error");
                        }
                  }
                 

            }
            catch(error)
            {
                console.log(error)
            }
           
        
        
       
 }
   
    
    return (
           <body>
         
               <section>
        <div class="form-box">
            <div class="form-value">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div class="inputbox">
                        <HiOutlineMail className='icon'></HiOutlineMail>
                        <input type="email" required onChange={e => setEmail(e.target.value)}/>
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <BiLockAlt className='icon'/>
                        <input type="password" required onChange={e => setPassword(e.target.value)}/>
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Remember Me 
                          {/* <a href="#">Forget Password</a>  */}
                        </label>
                      
                    </div>
                    <button type='submit'>Log in</button>
                    
                   {/* <div class="register">
                        <p>Don't have a account <a href="#">Register</a></p>
                    </div>  */}
                </form>
            </div>
        </div>
    </section>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </body>
            
    )
}