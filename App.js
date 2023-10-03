import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostScreen from './src/screens/PostScreen';
import CreatePostsScreen from './src/screens/CreatePostsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './src/screens/Example';
import { Button } from 'react-native';
import Header from './src/components/Header';
import Home from './src/screens/Home';

const MainStack = createStackNavigator();

const options = {
  // header: {
  //   // flex: 1,
  //   padding: 16,
  //   borderBottomColor: '#0000004D',
  //   borderBottomWidth: 0.5,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   alignContent: 'center',
  // },
  // h_text: {
  //   fontFamily: 'Roboto-500',
  //   fontSize: 17,
  //   lineHeight: 22,
  //   textAlign: 'center',
  //   marginTop: 28,
  //   marginLeft: 'auto',
  // },
  title: 'Публікація',
  // headerTitle: () => (
  //   <Header title={'Створити публікацію'} option={'createPosts'} />
  // ),
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontFamily: 'Roboto-500',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    // marginTop: 28,
    marginLeft: 'auto',
  },
};

export default function App() {
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
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          // options={{ headerShown: false }}
          // options={options}
        />
        <MainStack.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          // options={options}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
