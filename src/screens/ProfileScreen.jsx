import Container from '../components/Container';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
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
              <TouchableOpacity
                style={[styles.exitButton, styles.exitButton_home]}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Login')}
              >
                <Entypo name="log-out" size={24} color="black" />
              </TouchableOpacity>
              <View style={styles.photoContainer}>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
                  <AntDesign name="closecircleo" size={24} color="#E8E8E8" />
                  {/* <AntDesign name="pluscircleo" size={24} color="#FF6C00" /> */}
                </TouchableOpacity>
              </View>
              <Text style={styles.h_text}>Natali Romanova</Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // justifyContent: 'flex-end',
    position: 'relative',
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
  exitButton: {
    marginTop: 28,
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  exitButton_home: {
    position: 'absolute',
    // marginLeft: 'auto',
    top: -6,
    right: 16,
  },
  image: {
    flex: 1,
    width: '100%',
    // justifyContent: 'flex-end',
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
  h_text: {
    fontFamily: 'Roboto-500',
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: 'center',
    marginBottom: 1 ? 375 : 32,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
export default ProfileScreen;
