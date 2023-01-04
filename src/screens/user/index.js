import { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ImageSelector from "../../components/image-selector"
import { styles } from "./styles"
import { LocationSelector } from "../../components"
import colors from "../../constants/colors"
import { ScrollView } from "react-native"
import { getAddress, loadUser } from "../../store/thunk"

const User = ({navigation}) => {

const user = useSelector(state => state.auth)
const usuario = useSelector(state => state.user)
const [image, setImage] = useState("");
const [location, setLocation] = useState(usuario.coords);
const [address, setAddress] = useState(usuario.address)
const dispatch = useDispatch()

 useEffect(() => {
    dispatch(loadUser())
    setAddress(usuario.address)
    setLocation(usuario.coords)
}, [dispatch, usuario.address]) 
console.log('location', location)

const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
};
const onHandleLocationSelect = (location) => {
    setLocation(location);
};


const onHandleSubmit = () => {
    dispatch(getAddress(location))
}

    return (
        <ScrollView style={styles.container}> 
            <View style={{height: 100}}>
                <Text>Id: {user.userId}</Text>
                <Text>email: {user.email}</Text>
                <Text>Dirección: {address}</Text>
            </View>
            <View style={{height: 200}}>
                <ImageSelector  onImage={onHandleImageSelect} />
            </View>
            <View style={{height: 300}}>
                <LocationSelector onLocation={onHandleLocationSelect} location={location}/>
            </View>
            <Button title="Grabar dirección" color={colors.primary} onPress={onHandleSubmit} />
        </ScrollView>
    )
}

export default User;