import * as ImagePicker from "expo-image-picker";
import {useState} from "react";
import { View, Text, Image, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import colors from "../../constants/colors"
import { updateData } from "../../db";
import { savePhoto } from "../../store/slices/userSlice";
import { styles } from "./styles"
import RNFetchBlob from 'react-native-fetch-blob'

const ImageSelector = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
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
        // const img = image.assets[0].uri
        const { uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        let imgString = uri.toString()
         //const img = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540gusmtorres%252Fdietetica/ImagePicker/4cbafc0e-6f00-4153-91fd-aca42d9275dd.jpeg"
         //setPickedUrl(img);
         console.log(imgString)
         //dispatch(savePhoto(img))
         //await updateData(img, 'photo', auth.useId)
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