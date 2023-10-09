import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useState, useEffect, useReducer, useRef } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CreatePostsForm = ({ navigation }) => {
  const [isFocused1, SetIsFocused1] = useState(false);
  const [isFocused2, SetIsFocused2] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isPublishedButton, setIsPublishedButton] = useState(false);

  useEffect(() => {
    const ChangeLocation = () => {
      if (location !== '' && name !== '') {
        setIsPublishedButton(true);
      } else {
        setIsPublishedButton(false);
      }
    };
    ChangeLocation();
  }, [location, name]);

  const handleSubmit = () => {
    if (isPublishedButton) {
      console.log('Submit');
      navigation.navigate('Map', { locationName: location, name: name });
    }
  };
  return (
    <View>
      <View style={styles.input_BG}>
        <TextInput
          type="name"
          name="name"
          // pattern="([A-z0-9_.-]{1})@([A-z0-9_.-]{1}).([A-z]{28})"
          title="name"
          placeholder="Назва..."
          // onFocus={() => {
          //   SetIsFocused2(true);
          // }}
          // onBlur={() => {
          //   SetIsFocused2(false);
          // }}
          value={name}
          onChangeText={setName}
          style={
            isFocused1 ? [styles.input, styles.inputIsFocused] : [styles.input]
          }
        />
        <View style={styles.input_location_BG}>
          <TouchableOpacity style={styles.locationButton} activeOpacity={0.1}>
            <AntDesign name="enviromento" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <TextInput
            type="url"
            name="location"
            // pattern="([A-z0-9_.-]{1})@([A-z0-9_.-]{1}).([A-z]{28})"
            title="location"
            placeholder="Місцевість..."
            //   onFocus={() => {
            //     SetIsFocused2(true);
            //   }}
            // onBlur={() => {
            //   SetIsFocused2(false);
            // }}
            value={location}
            onChangeText={setLocation}
            style={
              isFocused2
                ? [styles.input, styles.input_location, styles.inputIsFocused]
                : [styles.input, styles.input_location]
            }
          />
        </View>
      </View>
      <TouchableOpacity
        style={
          !isPublishedButton
            ? [styles.publishLink]
            : [styles.publishLink, styles.publishLinkFocused]
        }
        activeOpacity={0.5}
        disabled={!isPublishedButton}
        onPress={handleSubmit}
      >
        <Text
          style={
            !isPublishedButton
              ? [styles.publishLinkText]
              : [styles.publishLinkText, styles.publishLinkTextFocused]
          }
        >
          Опублікувати
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input_BG: {
    marginBottom: 16,
    marginTop: 32,
  },
  input: {
    fontFamily: 'Roboto-400',
    fontWeight: '400',
    fontSize: 16,
    height: 50,
    marginBottom: 16,
    borderColor: '#E8E8E8',
    borderBottomWidth: 1,
    padding: 16,
  },
  input_location: {
    paddingLeft: 24,
  },
  input_location_BG: {
    position: 'relative',
  },
  locationButton: {
    position: 'absolute',
    top: 12,
  },
  publishLink: {
    backgroundColor: '#F6F6F6',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 66,
  },
  publishLinkText: {
    color: '#BDBDBD',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
  },
  publishLinkFocused: {
    backgroundColor: '#FF6C00',
  },
  publishLinkTextFocused: {
    color: '#fff',
  },
});
export default CreatePostsForm;
