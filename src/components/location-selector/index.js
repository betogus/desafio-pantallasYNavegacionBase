import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import MapPreview from "../map-preview";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

const LocationSelector = ({ onLocation, location }) => {

  const [pickedLocation, setPickedLocation] = useState(location);
  const navigation = useNavigation();
  const route = useRoute();
  const mapLocation = route?.params?.mapLocation
  const [getLocationFromMap, setGetLocationFromMap] = useState(false)
  const verifyPermissions = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
          Alert.alert("Permiso insuficientes", "Necesitamos permisos para usar la localizacion", 
          [{ text: "Ok"}]
          );
          return false;
      }
      return true;
    };
    const onHandleGetLocation = async () => {
      const isLocationPermissionGranted = await verifyPermissions();
      if (!isLocationPermissionGranted) return;
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      const { latitude, longitude } = location.coords;
      setGetLocationFromMap(false)
      setPickedLocation({ lat: latitude, lng: longitude });
      onLocation({ lat: latitude, lng: longitude });

    };
    useEffect(() => {
      if (pickedLocation === (undefined || null)) {
        setPickedLocation(location)
      } 
      if (mapLocation && getLocationFromMap) {
        setPickedLocation(mapLocation);
        onLocation(mapLocation);
      }
    }, [mapLocation , pickedLocation, location]);

  const onHandlePickLocation = async () => {
    const isLocationPermissionGranted = await verifyPermissions();
    if (!isLocationPermissionGranted) return;
    setGetLocationFromMap(true)
    navigation.navigate("Maps");
  };


  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>No has seleccionado una ubicacion</Text>
      </MapPreview>
      <View style={styles.containerActions}>
        <View style={{...styles.iconContainer, top: -120, right: -210}}>
          <MaterialIcons name="my-location" size={24} color="black" onPress={onHandleGetLocation}/>
        </View>
        <View style={{...styles.iconContainer, top: -70, right: -50}}>
          <MaterialIcons name="not-listed-location" size={24} color="black" onPress={onHandlePickLocation}/>
        </View>
      </View>
    </View>
  );
};

export default LocationSelector;
