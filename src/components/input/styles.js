import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        width: "90%",
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        fontFamily: 'Poppins-Regular',
        marginBottom: 10
    },
    message: {
        marginVertical: 5
    },
    helperText: {
        color: colors.button,
        fontSize: 12,
        fontFamily: 'Poppins-Regular'
    }
})