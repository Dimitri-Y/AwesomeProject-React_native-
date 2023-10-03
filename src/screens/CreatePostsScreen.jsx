import Container from '../components/Container';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState, useReducer } from 'react';
import CreatePostsForm from '../components/CreatePostsForm';
const CreatePostsScreen = ({ navigation }) => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        style={styles.containerKeyB}
        // enabled
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.exitButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Home')}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.h_text}>Створити публікацію</Text>
          </View>
          <View style={styles.main}>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.addPhoto_view}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.addPhoto_button}
                >
                  <Entypo name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
              <Text style={styles.addPhoto_text}>Завантажте фото</Text>
            </TouchableOpacity>
            <CreatePostsForm></CreatePostsForm>
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
  header: {
    // flex: 1,
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
    padding: 16,
  },
  addPhoto_view: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
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
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 31,
  },
  deleteButton: {
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
});

export default CreatePostsScreen;
