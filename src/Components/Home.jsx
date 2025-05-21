import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react';
import { enhancedImageAPI } from './Utils/enhanceImageApi';
import axios from 'axios';

const Home=()=> {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);
        try{
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL.image);
            setLoading(false);
        }catch(error){
            console.log(error);
            alert("Error while enhancing the image. Please try again later.")
        }
    };
    
  return (
    <>
    <ImageUpload UploadImageHandler={UploadImageHandler}/>
    <ImagePreview 
    loading={loading} 
    uploaded={uploadImage} 
    enhanced ={enhancedImage}/>
    </>
  );
};

export default Home;