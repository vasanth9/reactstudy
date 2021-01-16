import React,{useState} from 'react'
import './App.css'
import imageCompression from 'browser-image-compression';
export default function App() {
    const [uploadPreview,setUploadPreview]=useState("http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png")
    const [uploaded,setUploaded]=useState(0);
    const [originalImage,setOriginalImage]=useState(null);
    const [compImage,setCompImage]=useState("http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png");
    const handleUpload=(e)=>{
        setOriginalImage(e.target.files[0])

        setUploadPreview(URL.createObjectURL(e.target.files[0]))
        setUploaded(1);
    }
    const handleCompress=e=>{
        if(uploaded)
        {
            const options = { 
            maxSizeMB: 2,          
            maxWidthOrHeight: 500,  
                  
            useWebWorker: true, }

            imageCompression(originalImage,options).then(x=>{
                let output=x;
                const dlink=URL.createObjectURL(output);
                setCompImage(dlink);
                console.log(x)
            })
        }
        }
    return (
        <div>
            <h1>Image Compressor</h1>
            <div className="imgContainer">
            <img src={uploadPreview} alt="Uplaod Preview"/>
            <input type="file" onChange={handleUpload}/>
            </div>
            <button  onClick={handleCompress}>Compress</button>
            <div className="imgContainer">
            <img src={compImage} alt="Compress Preview"/>
            <button ><a href={compImage} download="download">Download</a></button>
            </div>
        </div>
    )
}
