import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../actions/imageActions";

function Dashboard() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const images = useSelector((state) => state.image.images);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    // Perform image upload logic, e.g., using FormData and fetch API
    const formData = new FormData();
    formData.append("image", image);

    // Dispatch action to upload image
    dispatch(uploadImage(formData));
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      <div>
        <h3>Uploaded Images:</h3>
        <div>
          {images.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={`Image ${index}`}
              style={{ maxWidth: "200px", margin: "5px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
