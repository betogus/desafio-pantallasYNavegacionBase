import { useFonts } from 'expo-font';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import AppNavigator from './navigation';

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
        <AppNavigator/>
  );
}

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
