import { StyleSheet } from "react-native"
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 200,
        backgroundColor: "#c6c6c6",
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        top: -50,
        right: -50,
        borderWidth: 1,
        
    }
});
