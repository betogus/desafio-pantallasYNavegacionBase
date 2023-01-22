import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 600,
        backgroundColor: "#fff"
    },

    dataUser: {
        marginVertical: 1,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "#c6c6c6",
        backgroundColor: colors.backgroundBase,
        padding: 10
    },
   submit: {
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
   },
   submitText: {
    color: "#fff",
    fontFamily: "normal",
    fontWeight: "900",
    fontSize: 15
   },
   title: {
    color: "#6e6c6c"
   },
   signOff: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginVertical: 10
   },
   signOffText: {
    color: "#6e6c6c",
    fontSize: 20,
    textDecorationLine: 'underline'
   }
});
