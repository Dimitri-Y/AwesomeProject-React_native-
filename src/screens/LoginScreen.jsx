import LoginForm from "../components/LoginForm";
import { StyleSheet,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    View } from "react-native";

const LoginScreen = ()=> {
        return(
            <ImageBackground source={require("../../assets/images/PhotoBG.png")} style={styles.image}>
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.containerKeyB}
          >
            <View style={styles.container}>
            <LoginForm></LoginForm>
            {/* <Button style={styles.button}
            title={"Зареєструватися"}> 
            </Button> */}
           </View>
            </KeyboardAvoidingView>
            </ImageBackground>
             
    );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6C00',
    color: '#fff',
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  containerKeyB: {
    justifyContent: 'flex-end',
    // backgroundColor: '#fff',
    // borderTopRightRadius: 25,
    // borderTopLeftRadius: 25,
    // width: '100%',
  },
  image: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
  },
});
export default LoginScreen;