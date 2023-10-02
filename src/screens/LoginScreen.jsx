import LoginForm from '../components/LoginForm';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';

const LoginScreen = ({ onSubmit }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-200}
      style={styles.containerKeyB}
      // enabled
    >
      <ImageBackground
        source={require('../../assets/images/PhotoBG.png')}
        resizeMethod="resize"
        style={styles.image}
      >
        <View style={styles.container_all}>
          <View style={styles.container}>
            <LoginForm onSubmit={onSubmit}></LoginForm>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // justifyContent: 'flex-end',
  },
  containerKeyB: {
    flex: 1,
    width: '100%',
    // justifyContent: 'flex-end',
  },
  container_all: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    width: '100%',
    // justifyContent: 'flex-end',
  },
});
export default LoginScreen;
