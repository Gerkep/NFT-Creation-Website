import React from "react";
import { MdCloudUpload } from "react-icons/md";

const Placeholder = ({ getInputProps, getRootProps, error, touched }) => (
  <div
    {...getRootProps()}
    className={`placeholder-preview ${error && touched ? "has-error" : ""}`}
  >
    <input {...getInputProps()} />
    <MdCloudUpload style={{ fontSize: 100, paddingTop: 55 }} />
    <p>Click or drag image similar to your desired outcome to this area to upload.</p>
  </div>
);


export default Placeholder;
