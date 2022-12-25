import { useState } from "react"
import { View, Text, Button } from "react-native"
import { useSelector } from "react-redux"
import ImageSelector from "../../components/image-selector"
import { styles } from "./styles"
import { LocationSelector } from "../../components"
import colors from "../../constants/colors"
import { URL_GEOCODING } from "../../utils"
import { ScrollView } from "react-native"

const User = ({navigation}) => {

const user = useSelector(state => state.auth)
const [image, setImage] = useState("");
const [location, setLocation] = useState(null);
const [address, setAddress] = useState(null)

const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
};
const onHandleLocationSelect = (location) => {
    setLocation(location);
};

const getAdress = async (coords) => {
    try { 
        const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
        if (!response.ok) throw new Error("No se ha podido conectar con el servidor");
        const data = await response.json();

        if (!data.results) throw new Error("No se ha podido encontrar la dirección");
        const address = data.results[0].formatted_address;
        return address;
     } catch (error) {
        console.log("error", error);
        throw error;
    } 
};
const onHandleSubmit = async () => {
    let  newAdress = await getAdress(location)
    setAddress(newAdress)
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
                <LocationSelector onLocation={onHandleLocationSelect} />
            </View>
            <Button title="Grabar dirección" color={colors.primary} onPress={onHandleSubmit} />
        </ScrollView>
    )
}

export default User;