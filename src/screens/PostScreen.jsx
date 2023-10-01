import Container from '../components/Container';
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

const buttonExitImg = require('../../assets/images/logout.png');
const buttonGridImg = require('../../assets/images/grid.png');
const buttonAddPostImg = require('../../assets/images/Union.png');
const buttonUserImg = require('../../assets/images/user.png');

const PostScreen = ({ navigation }) => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.containerKeyB}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.h_text}>Публікація</Text>
            <TouchableOpacity
              style={styles.exitButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Login')}
            >
              <Entypo name="log-out" size={24} color="black" />
              {/* <ImageBackground
              source={buttonExitImg}
              style={{ width: "100%", height: "100%" }}
              ></ImageBackground> */}
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            <TouchableOpacity activeOpacity={0.5}></TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.gridButton} activeOpacity={0.5}>
              <AntDesign name="appstore-o" size={24} color="black" />
              {/* <ImageBackground
              source={buttonGridImg}
              style={{ width: "100%", height: "100%" }}
              ></ImageBackground> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addPostButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('CreatePosts')}
            >
              <AntDesign name="plus" size={13} color="white" />
              {/* <ImageBackground
                source={buttonAddPostImg}
                style={{ width: 13, height: 13 }}
                ></ImageBackground> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.userButton} activeOpacity={0.5}>
              <AntDesign name="user" size={24} color="black" />
              {/* <ImageBackground
              source={buttonUserImg}
              style={{ width: "100%", height: "100%" }}
              ></ImageBackground> */}
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
    // alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  containerKeyB: {
    justifyContent: 'flex-end',
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
