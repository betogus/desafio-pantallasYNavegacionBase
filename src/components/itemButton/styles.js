import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 40,
        borderRadius: "1rem",
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5
        
    },
    text: {
        color: colors.buttonText,
        fontSize: 18
    }
   
})