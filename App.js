import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostScreen from './src/screens/PostScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <RegistrationScreen></RegistrationScreen>
        {/* <LoginScreen></LoginScreen> */}
        {/* <PostScreen></PostScreen> */}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
  },
});
