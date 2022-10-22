import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';

function ImageUpload() {

    const dispatch = useDispatch();

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState();
    const [selectedFile, setSelectedFile] = useState('');
  
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }
  
    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      }
    }
  
    const handleSubmitFile = (e) => {
      console.log('submitting');
      e.preventDefault();
      if(!previewSource) return;
      uploadImage(previewSource);
    }
  
    const uploadImage = (base64EncodedImage) => {
        console.log('here is base64EncodedImage:', base64EncodedImage);
        dispatch({
            type: 'SET_PATIENT_PHOTO',
            payload: {patient_photo: base64EncodedImage},
            headers: {'Content-type': 'application/json'}
    })
    }

    return(
        <div>
            <h1>Upload</h1>
            <form onSubmit={handleSubmitFile}>
                <input 
                type="file" 
                name="image" 
                onChange={handleFileInputChange}
                value={fileInputState}
                className="form-input"
            />
            <button className="btn" type="submit">Submit</button>
            </form>
            {previewSource && (
                <Avatar src={previewSource} sx={{width: 200, height: 200}} />
            //   <img src={previewSource} style={{height: '300px'}} />
            )}
        </div>

    )
}

export default ImageUpload;





// function ImageUpload() {
//     cloudinary.openUploadWidget({
//        cloudName: "<cloud name>",
//        uploadPreset: "<upload preset>",
//        sources: [
//            "local"
//        ],
//        googleApiKey: "<image_search_google_api_key>",
//        showAdvancedOptions: false,
//        cropping: true,
//        multiple: false,
//        defaultSource: "local",
//        styles: {
//            palette: {
//                window: "#000000",
//                sourceBg: "#000000",
//                windowBorder: "#059696",
//                tabIcon: "#FFFFFF",
//                inactiveTabIcon: "#8E9FBF",
//                menuIcons: "#059696",
//                link: "#059696",
//                action: "#059696",
//                inProgress: "#FFFA00",
//                complete: "#33ff00",
//                error: "#EA2727",
//                textDark: "#000000",
//                textLight: "#FFFFFF"
//            },
//            fonts: {
//                default: null,
//                "'Space Mono', monospace": {
//                    url: "https://fonts.googleapis.com/css?family=Space+Mono",
//                    active: true
//                }
//            }
//        }
//    },
//     (err, info) => {
//       if (!err) {    
//         console.log("Upload Widget event - ", info);
//       }
//      });
//     }

//     export default ImageUpload;