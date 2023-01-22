import { signIn, signUp } from "./slices/authSlice";
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP, URL_BASE } from "../constants/firebase";
import { confirmOrder } from "./slices/cartSlice";
import { URL_GEOCODING } from "../utils";
import { getData, insertData, updateData } from "../db";
import { saveAddress } from "./slices/userSlice";
import { removeOrder, saveOrders } from "./slices/ordersSlice";
import { saveCategories } from "./slices/categorySlice";
import { saveProducts } from "./slices/productsSlice";
import { Alert } from "react-native";

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
            if (data.error) {
                Alert.alert('No se encuentra registrado o su contraseña no coincide')
            } else {
                await updateData(email, "email", data.localId)
                await updateData(password, "password", data.localId)
                dispatch(signIn({
                    token: data.idToken,
                    userId: data.localId,
                    email: email,
                    password: password
                }))
            }   
            
        } catch (error) {
            throw Error
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
                Alert.alert('El email ingresado ya existe')
            } else {
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
            }
            
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

export const loadCategories = () => async(dispatch) => {
    try {
        const response = await fetch(`${URL_BASE}/categories.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        const categories = Object.keys(data).map((key) => ({
            ...data[key],
        }));

        dispatch(saveCategories(categories));
    } catch (error) {
        console.log(error);
    }
};

export const loadProducts = () => async (dispatch) => {
    try {
        const response = await fetch(`${URL_BASE}/products.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        const products = Object.keys(data).map((key) => ({
            ...data[key],
            id: key,
        }));
        dispatch(saveProducts(products));
    } catch (error) {
        console.log(error);
    }
};


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
            await dispatch(saveAddress({address, coords}))
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



export const getOrders = () => async (dispatch) => {
    try {
        const response = await fetch(`${URL_BASE}/orders.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        const orders = Object.keys(data).map((key) => ({
            ...data[key],
            id: key,
        }));

        dispatch(saveOrders(orders));
    } catch (error) {
        console.log(error);
    }
};

export const deleteOrder = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${URL_BASE}/orders/${id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        dispatch(removeOrder(id));
    } catch (error) {
        console.log(error);
    }
};
