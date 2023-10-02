import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostScreen from './src/screens/PostScreen';
import CreatePostsScreen from './src/screens/CreatePostsScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

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
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          // options={{ headerShown: false }}
        />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={PostScreen} />
        <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
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
