import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        minHeight: 300,
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.backgroundBase
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        marginVertical: 5,
        textAlign: 'center'
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginVertical: '5'
    },
    input: {
        height: 45,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        fontFamily: 'Poppins-Regular',
        marginBottom: 10
    },
    promptButton : {
        width: '100%',
        backgroundColor: "white",
        borderColor: colors.primary,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    prompt: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10 
    },
    promptMessage: {
        fontSize: 14,
        color: colors.primaryDark,
        fontFamily: 'Poppins-Regular',
    }
});
