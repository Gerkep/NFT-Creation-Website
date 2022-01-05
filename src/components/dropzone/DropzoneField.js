import React from "react";
import DropZone from "react-dropzone";
import ImagePreview from "./ImagePreview";
import Placeholder from "./Placeholder";
import ShowError from "./ShowError";

const DropZoneField = ({
  handleOnDrop,
  input: { onChange },
  imagefile,
  meta: { error, touched }
}) => (
  <div className="preview-container">
    <h1 className="title">Upload Image:</h1>
    <DropZone
      accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={file => handleOnDrop(file, onChange)}
      multiple={false}
    >
      {props =>
        imagefile && imagefile.length > 0 ? (
          <ImagePreview imagefile={imagefile} />
        ) : (
          <Placeholder {...props} error={error} touched={touched} />
        )
      }
    </DropZone>
    <ShowError error={error} touched={touched} />
  </div>
);



export default DropZoneField;
