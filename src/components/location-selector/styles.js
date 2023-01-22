import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
    },
    preview: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.secondary,
        borderWidth: 1,
    },
    containerActions: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
     iconContainer: {
        width: 40,
        height: 40,
        marginBottom: -25,
        backgroundColor: "#fff",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        borderWidth: 1,
        
    }
});