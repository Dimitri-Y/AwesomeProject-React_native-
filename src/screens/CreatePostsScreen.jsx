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
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState, useReducer, useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';
import CreatePostsForm from '../components/CreatePostsForm';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const isFocused = useIsFocused();

  const [uriPhoto, setUriPhoto] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [locationURL, setLocationURL] = useState('');
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let locationURL = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: locationURL.coords.latitude,
          longitude: locationURL.coords.longitude,
        };
        setLocationURL(coords);
      }
    })();
  }, []);

  useEffect(() => {
    setIsDelete(true);
  }, [uriPhoto, name, location]);

  useEffect(() => {
    setLocation('');
    setName('');
    setUriPhoto('');
    setIsLoader(false);
    setIsDelete(false);
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let locationURL = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: locationURL.coords.latitude,
          longitude: locationURL.coords.longitude,
        };
        setLocationURL(coords);
      }
    })();
  }, [isFocused]);

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
          <ScrollView style={styles.main}>
            <TouchableOpacity activeOpacity={0.99}>
              <View style={styles.addPhoto_view}>
                {isFocused && uriPhoto === '' ? (
                  <Camera style={styles.camera} type={type} ref={setCameraRef}>
                    <View style={styles.addPhoto_view_button}>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={[
                          styles.addPhoto_button,
                          uriPhoto !== '' && { display: 'none' },
                          isLoader && { display: 'none' },
                        ]}
                        onPress={async () => {
                          if (cameraRef) {
                            setIsLoader(true);
                            cameraRef.resumePreview();
                            const { uri } = await cameraRef.takePictureAsync();
                            setUriPhoto(uri);

                            await MediaLibrary.createAssetAsync(uri);
                            // toggleCameraType();
                            // !uri && setIsLoader(false);
                          }
                        }}
                        disabled={isLoader}
                      >
                        <Entypo name="camera" size={24} color="#BDBDBD" />
                      </TouchableOpacity>
                    </View>
                  </Camera>
                ) : (
                  uriPhoto !== '' && (
                    <Image
                      source={{ uri: uriPhoto }}
                      style={{ width: '100%', height: '100%' }}
                    />
                  )
                )}
              </View>
              <TouchableOpacity activeOpacity={0.5}>
                <Text style={styles.addPhoto_text}>
                  {uriPhoto !== '' ? 'Редагувати фото' : 'Завантажте фото'}
                </Text>
              </TouchableOpacity>
              <CreatePostsForm
                navigation={navigation}
                name={name}
                setLocation={setLocation}
                setName={setName}
                location={location}
                uriPhoto={uriPhoto}
                locationURL={locationURL}
              ></CreatePostsForm>
              <View style={styles.footer}>
                <TouchableOpacity
                  onPress={() => {
                    if (isDelete) {
                      setUriPhoto('');
                      setName('');
                      setLocation('');
                      setIsLoader(false);
                    }
                  }}
                  style={styles.deleteButton}
                  activeOpacity={0.5}
                >
                  <AntDesign name="delete" size={24} color={'#BDBDBD'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  containerKeyB: {
    flex: 1,
    width: '100%',
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
  loaderContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
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
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: 'center',
    // gap: 31,
  },
  deleteButton: {
    height: 25,
    width: 25,
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'auto',
  },
  deleteButtonFocused: {
    backgroundColor: '#FF6C00',
  },
});

export default CreatePostsScreen;
