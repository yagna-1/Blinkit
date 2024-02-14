const initialState = {
  images: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    default:
      return state;
  }
};

export default imageReducer;
