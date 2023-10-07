import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import Home from './HomeNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

export default MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};
