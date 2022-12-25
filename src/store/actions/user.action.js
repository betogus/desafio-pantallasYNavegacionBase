import { userTypes } from "../types";

const {SAVE_PHOTO, SAVE_LOCATION, /* SAVE_USER, GET_USER */} = userTypes;

export const savePhoto = (item) => ({
    type: SAVE_PHOTO,
   item
});
/* export const saveUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_BASE}/users.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user})
            })
            const result = await response.json()

            dispatch({type: SAVE_USER,result})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getUser = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_BASE}/users.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json();
            const user = Object.keys(data).map((key) => ({...data[key], id: key}))
            dispatch({type: GET_USER, user})
        } catch (error) {
            console.log(error)
        }
    }
}
 */

export const saveLocation = (item) => ({
    type: SAVE_LOCATION,
    item
})


