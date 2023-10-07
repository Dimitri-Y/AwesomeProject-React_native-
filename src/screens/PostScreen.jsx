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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../components/Header';

const Tab = createBottomTabNavigator();

const PostScreen = ({ navigation }) => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
        style={styles.containerKeyB}
        // enabled
      >
        <View style={styles.container}>
          {/* <Header
            title={'Публікації'}
            option={'posts'}
            navigation={navigation}
          /> */}
          <View style={styles.main}></View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
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
    // flex: 6,
    // height: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default PostScreen;
