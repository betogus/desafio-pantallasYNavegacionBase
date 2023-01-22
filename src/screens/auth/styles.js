import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export const styles = StyleSheet.create({
    keyboardContainer: {
        height: '100%',
        width: '100%',
        paddingTop: 180
    },
 
    background: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        height: 400,
        width: '100%',
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
        paddingTop: 50,
        paddingHorizontal: 20,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.backgroundBase
    },
    logoContainer: {
        
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 200,
        width: 200,
        top: -10
    },
    titleLogo: {
        top: -60,
        fontSize: 30,
        fontFamily: 'Solitreo-Regular',
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
