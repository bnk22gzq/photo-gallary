import axios from 'axios';

const baseURL='https://photogallary-restapi.onrender.com'  //'http://localhost:5050'



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



 //get all users
 export const getalluserdata= async ()=>{
  try
  {
        const response = await axios.get(`${baseURL}/users`);
        return response.data;
  }
  catch(error) {
      return [];
  }

  
}
