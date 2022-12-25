import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    color: colors.title,
  },
  textContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 320,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: 320,
    height: 160,

    borderRadius: 10,
    resizeMode: 'cover',
  },
});
