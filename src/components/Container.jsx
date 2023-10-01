import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';

const Container = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {children}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
  },
});

export default Container;

{
  /* <RegistrationScreen onSubmit={onSubmitRegister}></RegistrationScreen> */
}
{
  /* <LoginScreen onSubmit={onSubmitLogin}></LoginScreen> */
}
{
  /* <PostScreen></PostScreen> */
}
