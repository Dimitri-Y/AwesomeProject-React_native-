import LoginForm from "../components/LoginForm/LoginForm";
import { StyleSheet,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform, } from "react-native";
import styles from "./LoginScreen.styles";
const buttonImg = require("../../assets/images/add.png");
const LoginScreen = ()=> {
        return(
            <ImageBackground source={require("../../assets/images/PhotoBG.png")} resizeMode="cover" style={styles.image}>
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.containerKeyB}
          >
            <LoginForm></LoginForm>
            {/* <Button style={styles.button}
            title={"Зареєструватися"}> 
            </Button> */}
           
            </KeyboardAvoidingView>
            </ImageBackground>
             
    );
}

export default LoginScreen;