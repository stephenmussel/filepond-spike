import React from 'react';
import { useState }  from 'react';

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FilePondUpload() {

    const [files, setFiles] =useState([]);

    return(
        <div>
            <h2>FilePond File Upload Example</h2>
            <FilePond 
                allowMultiple={true}
                files={files}
                maxFiles={5}
                allowReorder={true}
            />
        </div>
    )
}

export default FilePondUpload;