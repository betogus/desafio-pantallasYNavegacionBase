import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  footer: {
    backgroundColor: colors.primary,
    borderTopWidth: 1,
    borderTopColor: colors.primaryDark,
    borderBottomColor: colors.primary,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  textTotal: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  buttonDisabled: {
    backgroundColor: colors.primaryDark,
    borderTopWidth: 1,
    borderTopColor: colors.primaryDark,
    borderBottomColor: colors.primaryDark,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
