import {
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const PostScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-100}
      style={styles.containerKeyB}
      // enabled
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h_text}>Публікація</Text>
          <TouchableOpacity style={styles.exitButton} activeOpacity={0.5}>
            <Entypo name="log-out" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <TouchableOpacity activeOpacity={0.5}></TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.gridButton} activeOpacity={0.5}>
            <AntDesign name="appstore-o" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addPostButton} activeOpacity={0.5}>
            <AntDesign name="plus" size={13} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.userButton} activeOpacity={0.5}>
            <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: '100%',
  },
  containerKeyB: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
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
  },
  exitButton: {
    marginLeft: 'auto',
    marginTop: 28,
    // right: 16,
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  main: {
    flex: 6,
  },
  footer: {
    // flex: 1,
    padding: 16,
    borderTopColor: '#0000004D',
    borderTopWidth: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 31,
  },
  gridButton: {
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  addPostButton: {
    backgroundColor: '#FF6C00',
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  userButton: {
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
});

export default PostScreen;
