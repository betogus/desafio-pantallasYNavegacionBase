import * as ImagePicker from "expo-image-picker";
import {useState} from "react";
import { View, Text, Image, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import colors from "../../constants/colors"
import { savePhoto } from "../../store/slices/userSlice";
import { styles } from "./styles"
const ImageSelector = ({onImage}) => {
    const dispatch = useDispatch()
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
             aspect: [16, 9],
             quality: 0.7,
             allowsEditing: true
         });
         dispatch(savePhoto(image.uri))
         setPickedUrl(image.uri);
         onImage(image.uri);
     };
    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? ( 
                    <Text>No tiene una foto de perfil</Text>    
                ) : (
                    <Image style={styles.image} source={{uri: pickedUrl}} /> 
                )}
                <Button title='Tomar foto' color={colors.button} onPress={onHandleTakeImage} />
            </View>
        </View>
    )
}

export default ImageSelector