import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    // Handle the files here (e.g., upload them or set the state)
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <div className=" h-[180px] w-full flex justify-center items-center ">
           <p>Drop the Image here ...</p>
          </div>
          :
          <div className=" h-[180px] w-full flex justify-center items-center ">
          <p>Drag 'n' drop Restaurant image here, or click to select Restaurant Image</p>

          </div>
      }
    </div>
  );
}

const styles = {
  dropzone: {
    border: '2px dashed #cccccc',
    // padding: '20px',
    height: '180px',
    width: '80%',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '10px',
    // backgroundColor: '#80808060',
    transition: 'background-color 0.3s ease',
  }
};

export default MyDropzone;
