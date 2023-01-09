import { signIn, signUp } from "./slices/authSlice";
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP, URL_BASE } from "../constants/firebase";
import { confirmOrder } from "./slices/cartSlice";
import { URL_GEOCODING } from "../utils";
import { getAllData, getData, insertData, updateData } from "../db";
import { saveAddress } from "./slices/userSlice";

export const loguearse =  (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });
            const data = await response.json();
            let loadData = await getData(data.localId)
            let allData = await getAllData()
            console.log("all data", allData)
            loadData.rows.length === 0 ? await insertData(data.localId) : null
            await updateData(email, "email", data.localId)
            await updateData(password, "password", data.localId)
            loadData = await getData(data.localId)
            console.log("load data", loadData)
            dispatch(signIn({
                token: data.idToken,
                userId: data.localId,
                email: email,
                password: password
            }))
        } catch (error) {
            throw error;
        }
    }
}

export const registrarse = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });
            if (!response.ok) {
                throw new Error('Algo anda mal')
            }
            const data = await response.json();
            await insertData(data.localId)
            await updateData(email, "email", data.localId)
            await updateData(password, "password", data.localId)
            dispatch(signUp({
                token: data.idToken,
                userId: data.localId,
                email: email,
                password: password
            })) 
        } catch (error) {
            throw error;
        }
    }
}

export const confirmCart = (items, total) => async (dispatch) => {
    try {
        const response = await fetch(`${URL_BASE}/orders.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: Date.now(),
                items,
                total,
            }),
        });
        const result = await response.json();

        dispatch(confirmOrder({
             result
        }));
    } catch (error) {
        dispatch(confirmOrder({
            error,
        }));
    }
};



/* export const savePhoto = () => {
     return async () => {
         const fileName = action.image.split("/").pop();
         const Path = FileSystem.documentDirectory + fileName;
         if (state.user.find(item => item.id === action.id))
             try {
                 await FileSystem.moveAsync({
                     from: image,
                     to: Path,
                 })

                 return {
                     ...state,
                     photo: Path
                 };
             } catch (error) {
                 console.log("error", error);
                 throw error;
             }
     };
     case SAVE_LOCATION:
         return {
             ...state,
             location: action.item
         }
     default:
     return state
     }
}
           
 */

export const getAddress = (coords, userId) => async (dispatch) => {
        try {
            const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
            if (!response.ok) throw new Error("No se ha podido conectar con el servidor");
            const data = await response.json();

            if (!data.results) throw new Error("No se ha podido encontrar la dirección");
            const address = data.results[0].formatted_address;
            await updateData(address, 'address', userId)
            await updateData(coords.lat, 'lat', userId)
            await updateData(coords.lng, 'lng', userId)
            let loadData = await getData(userId)
            console.log(loadData)
            dispatch(saveAddress({address, coords}))
        } catch (error) {
            throw Error;
        }
}


 export const loadUser = (userId) => {
    return async (dispatch) => {
        try {
            const result = await getData(userId)
            let coords = { lat: result?.rows?._array[0]?.lat, lng: result?.rows?._array[0]?.lng} 
            let address = result?.rows?._array[0]?.address                                                                                                                                                                                                                                                               
            dispatch(saveAddress({address, coords}))
        }
        catch (error) {
            throw Error   
        }
        
    }
} 

export const lastLogin = () => {
    return async (dispatch) => {
        try {
            const results = await getAllData()
            const length = results?.rows?.length
            const result = results?.rows?._array[length - 1]
            dispatch(signUp({
                userId: result.userId,
                email: result.email,
                password: result.password
            }))
            dispatch(saveAddress(result.address, {lat: result.lat, lng: result.lng}))
        }
        catch (error) {
            throw error;
    
        }
    }
}