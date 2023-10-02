import RegistrationForm from '../components/RegistrationForm';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const buttonImg = require('../../assets/images/add.png');

const RegistrationScreen = ({ onSubmit }) => {
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
            <View style={styles.photoContainer}>
              <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
                <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
              </TouchableOpacity>
            </View>
            <RegistrationForm onSubmit={onSubmit}></RegistrationForm>
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
