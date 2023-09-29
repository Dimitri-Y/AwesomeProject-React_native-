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
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('constacts')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = contactData => {
    const { name, email, password } = contactData;
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicateName) {
      return window.alert(` This name,${name}, is already in contacts!`);
    }
    const isDuplicateEmail = contacts.some(
      contact => contact.email.toLowerCase() === email.toLowerCase()
    );
    if (isDuplicateEmail) {
      return window.alert(` This email,${email}, is already in contacts!`);
    }
    setContacts([...contacts, contactData]);
    console.log(`${email}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <RegistrationScreen></RegistrationScreen> */}
        {/* <LoginScreen></LoginScreen> */}
        <PostScreen></PostScreen>
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
