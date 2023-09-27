import LoginForm from "../../components/LoginForm/LoginForm";
import { StyleSheet,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    View } from "react-native";
import styles from "./LoginScreen.styled";

const LoginScreen = ()=> {
        return(
            <ImageBackground source={require("../../../assets/images/PhotoBG.png")} resizeMode="cover" style={styles.image}>
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

export default LoginScreen;