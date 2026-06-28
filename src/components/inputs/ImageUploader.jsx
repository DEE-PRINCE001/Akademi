import React, { useState } from 'react';

export default function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Process the file here (e.g., upload to server or create a local preview)
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div className="w-full max-w-30 max-h-30 mb-12.5">
      
      <label className="block text-primary-text text-[14px] font-bold mb-2">
        Photo <span>*</span>
      </label>

      {/* Interactive Dropzone Box */}
      <label 
        htmlFor="file-upload" 
        className="flex flex-col items-center justify-center w-full aspect-square border-2 border-dashed border-grey-300 rounded-lg cursor-pointer hover:bg-grey-200/20 hover:border-grey-200 transition-colors duration-200 p-2 text-center"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-grey-300 font-normal leading-relaxed text-xs">
            {selectedFile ? (
              <span className="text-primary text-xs">Selected: {selectedFile.name}</span>
            ) : (
              "Drag and drop or click here to select file"
            )}
          </p>
        </div>
        
        <input 
          id="file-upload" 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}