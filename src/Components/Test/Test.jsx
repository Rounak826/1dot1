import React, { useState } from 'react'
import { FilePond,registerPlugin } from 'react-filepond'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import './Test.css'
import {useAuth} from '../../Context/AuthContext'
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode)

export default function Test() {
    const [photo,setPhoto] = useState();
    const {uploadImage} = useAuth();
    function handelSubmit(e){
        e.preventDefault();
        console.log(photo[0].getFileEncodeDataURL());
        uploadImage(photo[0]).then(e=>{
            console.log(e);
        })
    }
    return (
        <div className="test">
            <FilePond
                files={photo}
                onupdatefiles={setPhoto}
                allowMultiple={false}
                name="photo"
                allowFileEncode={true}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            <button onClick={handelSubmit}>Upload</button>
        </div>
    )
}
