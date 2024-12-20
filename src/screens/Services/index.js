"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const Services = () => {
  const [base64Image, setBase64Image] = useState("");
  // console.log("selectedImage==", selectedImage);
  const handleImageUpload = async (event) => {
    const file = event.target.files[0]; // Get the selected file
    console.log("file==", file);
    if (file.size > 90000) {
      console.log("file is to heavy");
    } else {
      if (file) {
        const reader = new FileReader();

        // On successful file read, set the base64 string in state
        reader.onloadend = () => {
          setBase64Image(reader.result); // Base64 string will be in reader.result
        };

        reader.readAsDataURL(file); // Convert the image to base64 format
      }
    }
  };
  return (
    <div className="mb-5 flex flex-col">
      <Navbar />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {base64Image && (
        <div>
          <h3>Base64 Image:</h3>
          {/* <textarea
            rows="5"
            cols="60"
            readOnly
            value={base64Image} // Display the base64 string
          /> */}
          <img
            src={base64Image}
            alt="Uploaded preview"
            style={{ maxWidth: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Services;
