import Container from '../components/Container';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState, useReducer } from 'react';
import { useRoute } from '@react-navigation/native';

const CommentsScreen = ({ navigation }) => {
  const route = useRoute();
  const imageURL = route.params.imageURL;
  console.log(imageURL);
  let imageUrl;
  switch (imageURL) {
    case '../../assets/images/1.png':
      imageUrl = require('../../assets/images/1.png');
      break;
    case '../../assets/images/2.png':
      imageUrl = require('../../assets/images/2.png');
      break;
    case '../../assets/images/3.png':
      imageUrl = require('../../assets/images/3.png');
      break;
    default:
      imageUrl = { uri: imageURL };
      break;
  }
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-200}
        style={styles.containerKeyB}
        // enabled
      >
        <View style={styles.container}>
          <View style={styles.main}>
            <SafeAreaView>
              <TouchableOpacity activeOpacity={0.99}>
                {imageURL && (
                  <Image
                    source={imageUrl}
                    resizeMethod="resize"
                    style={styles.image}
                  />
                )}
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <View style={styles.footer}>
            <View style={styles.input_BG}>
              <TextInput
                type="text"
                name="comment"
                pattern="([A-z0-9_.-]{1})@([A-z0-9_.-]{1}).([A-z]{28})"
                title="comment"
                placeholder="Коментувати..."
                style={styles.input}
              />
              <TouchableOpacity
                style={styles.commentButton}
                activeOpacity={0.5}
              >
                <AntDesign name="arrowup" size={14} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
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
  header: {
    padding: 16,
    borderBottomColor: '#0000004D',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  h_text: {
    fontFamily: 'Roboto-500',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 28,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  exitButton: {
    // marginLeft: 'auto',
    marginTop: 28,
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  main: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    // justifyContent: 'flex-end',
    marginBottom: 32,
  },
  footer: {
    // flex: 1,
    padding: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
    // gap: 31,
  },
  input: {
    fontFamily: 'Roboto-400',
    fontWeight: '400',
    fontSize: 16,
    height: 50,
    // marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 50,
    padding: 16,
  },
  input_BG: {
    position: 'relative',
    borderRadius: 50,
  },
  commentButton: {
    backgroundColor: '#FF6C00',
    position: 'absolute',
    top: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 34,
    width: 34,
    pointerEvents: 'auto',
  },
});

export default CommentsScreen;
