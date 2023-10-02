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
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [contacts, setContacts] = useState(
    [] // () => {return JSON.parse(AsyncStorage.getItem('constacts')) ?? [];}
  );

  // useEffect(() => {
  //   AsyncStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onSubmitRegister = contactData => {
    const { login, email, password } = contactData;
    const isDuplicateLogin = contacts.some(
      contact => contact.login.toLowerCase() === login.toLowerCase()
    );
    if (isDuplicateLogin) {
      return window.alert(` This name,${login}, is already in contacts!`);
    }
    const isDuplicateEmail = contacts.some(
      contact => contact.email.toLowerCase() === email.toLowerCase()
    );
    if (isDuplicateEmail) {
      return window.alert(` This email,${email}, is already in contacts!`);
    }
    setContacts([...contacts, contactData]);
    console.log(`Register:${login} ${email},${password}`);
  };

  const onSubmitLogin = contactData => {
    const { email, password } = contactData;
    console.log(`Login:${email},${password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <RegistrationScreen onSubmit={onSubmitRegister}></RegistrationScreen> */}
        <LoginScreen onSubmit={onSubmitLogin}></LoginScreen>
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
    // alignItems: 'center',
    width: '100%',
  },
});
