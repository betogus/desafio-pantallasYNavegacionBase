import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: "#fff",
      borderRadius: 15,
      paddingVertical: 10,
      paddingHorizontal: 20,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      width: 300
    },
    header: {
      width: '100%',
      fontSize: 20,
      fontFamily: 'normal',
      color: "#6e6c6c",
      marginBottom: 5,
      fontWeight: "900",
    },
    text: {
      fontSize: 18,
      color: "#6e6c6c",
      fontFamily: 'normal',
      marginBottom: 5,
      fontWeight: '900'
    },
    title: {
      color: "#6e6c6c"
    }

});
