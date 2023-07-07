import React, { useRef,useState} from 'react'
import { render } from "react-dom";
import { storage } from "../../firebase";
import {ref,uploadBytesResumable, getDownloadURL} from "firebase/storage"
import './index.css'

const  PhotoUpload= () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

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

  
  const handleUpload = () => {
   
  const imageUrls = [];

  for (const file of images) {
    const storageRef = ref(storage, `files/${file.name}`);   //change here only for the perticuler user
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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          imageUrls.push(downloadURL);

          // Check if all images have been uploaded
          if (imageUrls.length === images.length) {
            console.log("All images uploaded:", imageUrls);
            // Send the imageUrls array to the backend if needed
          }
        });
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