import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

export const Upload = () => {
    const maxSize = 1048576;

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);

    const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
        onDrop,
        marginTop:"20vh",
        minSize: 0,
        maxSize,
    });

    const style={
        width:"30vw",
        height:"10vh",
        border: "3px solid white",
        borderRadius: "0%",
        backgroundColor: "#e9ecf1", 
        color:"#6c757d",
        paddingTop:"3vh"
    }

    const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

    return (
        <div className="container text-center mt-5" >
            <div {...getRootProps()} style={style}>
                <input {...getInputProps()} />
                {!isDragActive && 'Click here or drop a photo to upload!'}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && "Photo type not accepted, sorry!"}
                {isFileTooLarge && (
                    <div className="text-danger mt-2">
                        File is too large.
          </div>
                )}
            </div>
            <ul className="list-group mt-2">
                {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                    <li className="list-group-item list-group-item-success">
                        {acceptedFile.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
