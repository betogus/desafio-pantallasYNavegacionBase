import * as ImagePicker from "expo-image-picker";
import {useState} from "react";
import { View, Image } from "react-native"
import { useSelector } from "react-redux";
import { styles } from "./styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ImageSelector = () => {
    const photo = useSelector(state => state.user.photo)
    const [pickedUrl, setPickedUrl] = photo ? useState(photo) : useState(null)
   
    
     const verifyPermissions = async () => {
         const { status } = await ImagePicker.requestCameraPermissionsAsync();

         if (status !== "granted") {
             Alert.alert("Permiso denegado", "Necesitamos permisos para usar la cámara", [{
                 text: "Ok"
             }]);
             return false;
         }
         return true;
     };

     const onHandleTakeImage = async () => {
         const isCameraPermission = await verifyPermissions();
         if (!isCameraPermission) return;

         const image = await ImagePicker.launchCameraAsync({
             aspect: [9, 9],
             quality: 0.7,
             allowsEditing: true
         });
        const img = image.assets[0].uri
        setPickedUrl(img);
         
     };
    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? ( 
                <View style={styles.image}>
                    <FontAwesome5 name="user" size={80} color="black" />
                </View>   
                ) : (
                    <Image style={styles.image} source={{uri: pickedUrl}} /> 
                )}
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="pencil-outline" size={24} color="black" onPress={onHandleTakeImage}/>
                </View>
            </View>
        </View>
    )
}

export default ImageSelector