import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  header: {
    fontSize: 18,
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
