import { getByDisplayValue } from '@testing-library/react';
import axios from 'axios';

const baseURL='https://photogallary-restapi.onrender.com'  //'http://localhost:5050'

const config = {
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
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

  }
}
