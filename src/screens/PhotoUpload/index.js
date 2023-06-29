import React, { useRef} from 'react'

import './index.css'

const  PhotoUpload= () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObject = event.target.files[0];
    // Handle the selected file
    console.log(fileObject);
  };
  return (
  <div class='mainphoto_container'>
      <div class='PhotoUploadContainer'>
          <button className='Upload-button' onClick={handleButtonClick}>Upload Image</button>
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
       </div>
      <div class='allUploadedphotoes'>

      </div>
    </div>
  )
}

export default PhotoUpload