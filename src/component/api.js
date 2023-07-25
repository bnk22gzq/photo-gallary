import { getByDisplayValue } from '@testing-library/react';
import axios from 'axios';
import { json } from 'react-router-dom';

const baseURL='https://photogallary-restapi.onrender.com'  //'http://localhost:5050'
const token=JSON.parse(localStorage.getItem('accessToken'));
const config = {
  headers: {
    token:`Bearer ${token}`  // Replace with your actual token
  }
};

//login user
export const loginUser=async (data)=>{
  try
  {
    const response=await axios.post(`${baseURL}/login`,data);
    return response;
  }
  catch(error)
  {
      
      console.log('error...'+error);
      return error;
  }
}
//patch photoes
export const uploadphotos=async(rfid,data)=>{
      try
      {
          const response=await axios.patch(`${baseURL}/users/${rfid}`,data,config);
          return response;
      }
      catch(error)
      {
        return error;
      }
}
//get photoes data
export const getPhotoes=async(rfid)=>{
  try
  {
    const response=await axios.get(`${baseURL}/users/${rfid}`);
    return response;

  }
  catch(error)
  {
        console.log(error.response)
  }
}
