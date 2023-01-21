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
    flexDirection: "row",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: colors.backgroundBase,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    width: "70%"
  },
  detailContainer: {
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
