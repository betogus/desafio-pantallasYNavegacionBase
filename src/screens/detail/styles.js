import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: colors.primaryDark,
    textAlign: 'center',
    margin: 20,
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'center',
    marginVertical: 20,
  },
});
