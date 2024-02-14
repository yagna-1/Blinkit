export const uploadImage = (imageData) => {
  return {
    type: "UPLOAD_IMAGE",
    payload: imageData,
  };
};
