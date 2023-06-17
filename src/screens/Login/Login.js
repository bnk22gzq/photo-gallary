import React from 'react'
import { BiLockAlt } from "react-icons/bi";
import {HiOutlineMail} from "react-icons/hi";
import './Login.css';
import { NavLink } from 'react-router-dom';


export default function Login()
{
    return (
           <body>
               <section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <HiOutlineMail className='icon'></HiOutlineMail>
                        <input type="email" required/>
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <BiLockAlt className='icon'/>
                        <input type="password" required/>
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>
                      
                    </div>
                    <NavLink to='/PhotoUpload' style={{display:'flex',textDecoration:'none'}}><button>Log in</button></NavLink>
                    {/* <div class="register">
                        <p>Don't have a account <a href="#">Register</a></p>
                    </div> */}
                </form>
            </div>
        </div>
    </section>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </body>
            
    )
}