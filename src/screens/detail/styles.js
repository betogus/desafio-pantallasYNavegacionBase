import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontFamily: 'normal',
    fontWeight: "900",
    textAlign: 'center',
    fontSize: 26,
    
  },
  buttonContainer: {
    width: 270,
    height: 50,
    marginVertical: 30,
    backgroundColor: colors.backgroundBase,
    borderRadius: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",

  },
  detailContainer: {
    position: "absolute",
    top: 150,
    width: "100%",
    height: "100%",
    left: 0,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    padding: 10,
    display: "flex",
    alignItems: "center",
    paddingVertical: 30,
  },
  text: {
    fontSize: 18,
    color: "#6e6c6c"
  },
  textContainer: {
    color: "#6e6c6c",
    display: 'flex',
    flexDirection: 'row', 
  },
  iconContainer: {
    width: "25%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
