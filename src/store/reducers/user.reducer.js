import { userTypes } from "../types";
const { SAVE_PHOTO, SAVE_LOCATION } = userTypes;

const initialState = {
    id: null,
    email: null,
    photo: null,
    location: null
}

const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SAVE_PHOTO:
            return async () => {
                const fileName = action.image.split("/").pop();
                const Path = FileSystem.documentDirectory + fileName;
                if (state.user.find(item => item.id === action.id) )
                try {
                    await FileSystem.moveAsync({
                        from: image,
                        to: Path,
                    })

                    return { ...state, photo: Path};
                } catch (error) {
                    console.log("error", error);
                    throw error;
                }
            };
        case SAVE_LOCATION:
            return {...state, location: action.item}
        default:
            return state
    }
}

export default userReducer;