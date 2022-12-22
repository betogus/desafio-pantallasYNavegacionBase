import { useFonts } from 'expo-font';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';
import store from './store';

export default function App() {
  const [loaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  scroll: {
    flex: 1,
  },
});
