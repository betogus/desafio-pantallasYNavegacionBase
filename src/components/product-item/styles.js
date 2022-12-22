import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.backgroundBase,
  },
  touchable: {
    flex: 1,
    minHeight: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  detailContainer: {
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
