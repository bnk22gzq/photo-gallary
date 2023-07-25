import React, { useEffect, useRef,useState} from 'react'
import { render } from "react-dom";
import { storage } from "../../firebase";
import {ref,uploadBytesResumable, getDownloadURL} from "firebase/storage"
import './index.css'
import {getPhotoes,uploadphotos} from '../../component/api'
import { json } from 'react-router-dom';

const  PhotoUpload= () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(()=>{
    localStorage.setItem('PhotoUploadPage', 'true');
  });

  const handleButtonClick = () => {
     fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObject = event.target.files[0];
    // Handle the selected file
    console.log(fileObject);
  };

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  
  const handleUpload = async() => {
   
  const imageUrls = [];
    //get photoes from api
   
    
  for (const file of images) {
    console.log('images.....',images.length);
    const storageRef = ref(storage, `/${file.name}`);   //change here only for the perticuler user
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          console.log("File available at", downloadURL);
          const url=downloadURL;
          imageUrls.push({url});

          // Check if all images have been uploaded
          if (imageUrls.length === images.length) {
               console.log("All images uploaded:", imageUrls);
              const user=JSON.parse(localStorage.getItem('user'));
              const response=await getPhotoes(user['rfid']); //response.data existing user
              const photoes=[...response.data,...imageUrls]
              const res=uploadphotos(user['rfid'],{photoes}); //patch the images in database using REST API
            
          }
          
        })
      }
    );
  }
 
  };

  return (
  
  <div class='mainphoto_container'>
      <div class='PhotoUploadContainer'>
          <input
            ref={fileInputRef}
            type="file"
            multiple
           // style={{ display: "none" }}
            onChange={handleChange}
          />
          <button className='Upload-button' onClick={handleUpload}>Upload Image</button>
         
       </div>
      <div class='allUploadedphotoes'>

      </div>
    
    </div>
    
    
  )
}

export default PhotoUpload