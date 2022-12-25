import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: colors.buttonText,
    fontSize: 18,
  },
});
