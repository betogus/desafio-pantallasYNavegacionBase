import { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ImageSelector from "../../components/image-selector"
import { styles } from "./styles"
import { LocationSelector } from "../../components"
import colors from "../../constants/colors"
import { ScrollView } from "react-native"
import { getAddress, loadUser } from "../../store/thunk"
import { TouchableOpacity } from "react-native"
import { signOff } from "../../store/slices/authSlice"

const User = ({navigation}) => {

const auth = useSelector(state => state.auth)
const usuario = useSelector(state => state.user)
const [image, setImage] = useState("");
const [location, setLocation] = useState(null);
const [address, setAddress] = useState(null)
const dispatch = useDispatch()
 useEffect(() => {
    if (!usuario.address) {
         dispatch(loadUser(auth.userId))

    }
    setAddress(usuario.address)
    setLocation(usuario.coords)
}, [dispatch, usuario.address]) 

const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
};
const onHandleLocationSelect = (location) => {
    setLocation(location);
};


const onHandleSubmit = () => {
    dispatch(getAddress(location, auth.userId))
}

const onHandleSignOff = () => {
    dispatch(signOff())
}
    return (
        <ScrollView style={styles.container}>
            <View style={{height: 200}}>
                <ImageSelector  onImage={onHandleImageSelect} />
            </View>
            <View style={styles.formUser}>
                <View style={{...styles.dataUser, borderTopLeftRadius: 20, borderTopRightRadius: 20,}}>
                    <Text style={styles.title}>email</Text>
                    <Text style={styles.data}>{auth.email}</Text>
                </View>
                <View style={styles.dataUser}>
                    <Text style={styles.title}>Dirección</Text>
                    <Text style={styles.data}>{address? address: "Sin datos"}</Text>
                </View>
                <View style={styles.dataUser}>
                    <LocationSelector onLocation={onHandleLocationSelect} location={location}/>
                    <TouchableOpacity onPress={onHandleSubmit} style={styles.submit}>
                        <Text style={styles.submitText}>Confirmar dirección</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.signOff}>
                <Text style={styles.signOffText} onPress={onHandleSignOff}>Cerrar Sesión</Text>
            </View>
        </ScrollView>
    )
}

export default User;