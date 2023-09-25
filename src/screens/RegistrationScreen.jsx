import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform, } from "react-native";
import styles from "./RegistrationScreen.styles";
const buttonImg = require("../../assets/images/add.png");
const RegistrationScreen=()=>{
        return(
            <ImageBackground source={require("../../assets/images/PhotoBG.png")} resizeMode="cover" style={styles.image}>
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.containerKeyB}
          >
            
              <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
            <ImageBackground
              source={buttonImg}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
            <RegistrationForm></RegistrationForm>
            {/* <Button style={styles.button}
            title={"Зареєструватися"}> 
            </Button> */}
           
        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.5}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          activeOpacity={0.5}
        >
          <Text style={styles.loginLinkText}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
            </KeyboardAvoidingView>
            </ImageBackground>
             
    );
}

export default RegistrationScreen;