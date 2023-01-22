import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        marginVertical: 5,
        color: colors.title
    },
    subLabel: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        marginVertical: 5,
        color: colors.button
    }
})