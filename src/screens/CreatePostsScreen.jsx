import Container from '../components/Container';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState, useReducer, useEffect } from 'react';
import CreatePostsForm from '../components/CreatePostsForm';
import { Header } from '../components/Header';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isDisabledText, setIsDisabledText] = useState(false);
  const [uriPhoto, setUriPhoto] = useState('');
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-100}
        style={styles.containerKeyB}
        // enabled
      >
        <View style={styles.container}>
          {/* <Header
            title={'Створити Публікацію'}
            option={'createPosts'}
            navigation={navigation}
          /> */}
          <View style={styles.main}>
            <View style={styles.addPhoto_view}>
              {uriPhoto === '' ? (
                <Camera style={styles.camera} type={type} ref={setCameraRef}>
                  <View style={styles.addPhoto_view_button}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        styles.addPhoto_button,
                        isDisabledText && { display: 'none' },
                      ]}
                      onPress={async () => {
                        if (cameraRef) {
                          setIsDisabledText(true);
                          toggleCameraType();
                          const { uri } = await cameraRef.takePictureAsync();
                          setUriPhoto(uri);
                          await MediaLibrary.createAssetAsync(uri);
                        }
                      }}
                    >
                      <Entypo name="camera" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                  </View>
                </Camera>
              ) : (
                <Image
                  source={{ uri: uriPhoto }}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.addPhoto_text}>
                {isDisabledText ? 'Редагувати фото' : 'Завантажте фото'}
              </Text>
            </TouchableOpacity>
            <CreatePostsForm navigation={navigation}></CreatePostsForm>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.deleteButton} activeOpacity={0.5}>
              <AntDesign name="delete" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  containerKeyB: {
    flex: 1,
    width: '100%',
    // justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    padding: 16,
  },
  addPhoto_view: {
    height: 240,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  addPhoto_view_button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
  addPhoto_button: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  addPhoto_text: {
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'left',
    color: '#BDBDBD',
  },
  footer: {
    // flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // gap: 31,
  },
  deleteButton: {
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
});

export default CreatePostsScreen;
