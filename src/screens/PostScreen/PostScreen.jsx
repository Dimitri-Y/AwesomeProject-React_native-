import { 
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    View, 
    Text } from "react-native";
import styles from "./PostScreen.styled";

const buttonExitImg = require("../../../assets/images/logout.png");
const buttonGridImg= require("../../../assets/images/grid.png");
const buttonAddPostImg= require("../../../assets/images/Union.png");
const buttonUserImg= require("../../../assets/images/user.png");

const PostScreen = ()=> {
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.containerKeyB}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.h_text}>Публікація</Text>    
            <TouchableOpacity style={styles.exitButton} activeOpacity={0.5}>
              <ImageBackground
              source={buttonExitImg}
              style={{ width: "100%", height: "100%" }}
              ></ImageBackground>
             </TouchableOpacity>
          </View>
          <View style={styles.main}>
          <TouchableOpacity activeOpacity={0.5}>
          </TouchableOpacity>    
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.gridButton} activeOpacity={0.5}>
              <ImageBackground
              source={buttonGridImg}
              style={{ width: "100%", height: "100%" }}
              ></ImageBackground>
             </TouchableOpacity>
             <TouchableOpacity style={styles.addPostButton} activeOpacity={0.5}>
                <ImageBackground
                source={buttonAddPostImg}
                style={{ width: 13, height: 13 }}
                ></ImageBackground>
             </TouchableOpacity>
             <TouchableOpacity style={styles.userButton} activeOpacity={0.5}>
              <ImageBackground
              source={buttonUserImg}
              style={{ width: "100%", height: "100%" }}
              ></ImageBackground>
             </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>  
);
}

export default PostScreen;