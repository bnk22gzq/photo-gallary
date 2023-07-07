import React, { useState } from 'react'
import { BiLockAlt } from "react-icons/bi";
import {HiOutlineMail} from "react-icons/hi";
import './index.css';
import { NavLink } from 'react-router-dom';
import {loginUser}from '../../component/api'








export default function Login()
{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const response=await loginUser({
          email,
          password
        });
        console.log('response:',response.data);
        
       
        // if ('token' in response) {
        //   swal("Success", response.message, "success", {
        //     buttons: false,
        //     timer: 2000,
        //   })
        //   .then((value) => {
        //     localStorage.setItem('accessToken', response['token']);
        //     localStorage.setItem('user', JSON.stringify(response['user']));
        //     window.location.href = "/profile";
        //   });
        // } else {
        //   swal("Failed", response.message, "error");
        // }
      }
   
    
    return (
           <body>
         
               <section>
        <div class="form-box">
            <div class="form-value">
                <form action="" onSubmit={handleSubmit}>
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