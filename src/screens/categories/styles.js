import { StyleSheet, StatusBar, Platform } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Regular',
    color: colors.title,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  
});
