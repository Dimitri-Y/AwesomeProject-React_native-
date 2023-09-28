import RegistrationForm from "../components/RegistrationForm";
import { StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform, } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const buttonImg = require("../../assets/images/add.png");

const RegistrationScreen=()=>{
        return(
            <ImageBackground source={require("../../assets/images/PhotoBG.png")} style={styles.image}>
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.containerKeyB}
          >
           <View style={styles.container}>
           <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
            <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
            {/* <ImageBackground
              source={buttonImg}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground> */}
          </TouchableOpacity>
        </View>
            <RegistrationForm></RegistrationForm>
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
  },
  photoContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -60,
    marginBottom: 33,
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  addButton: {
    marginTop: '65%',
    left: '90%',
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
});

export default RegistrationScreen;