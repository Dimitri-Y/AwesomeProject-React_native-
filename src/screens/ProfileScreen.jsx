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
import PostsList from '../components/PostsList';

const catalog = [
  {
    imageURL: '../../assets/images/1.png',
    title: 'Ліс',
    comments: 8,
    likes: 153,
    location: { locationName: 'Ukraine' },
  },
  {
    imageURL: '../../assets/images/2.png',
    title: 'Захід на Чорному морі',
    comments: 3,
    likes: 200,
    location: { locationName: 'Ukraine' },
  },
  {
    imageURL: '../../assets/images/3.png',
    title: 'Старий будиночок у Венеції',
    comments: 50,
    likes: 200,
    location: { locationName: 'Italy' },
  },
];

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
          <View style={styles.container}></View>
          <View style={styles.container_all}>
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
            <PostsList
              catalog={catalog}
              navigation={navigation}
              option={'profile'}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: 150,
    flex: 1,
  },
  containerKeyB: {
    flex: 1,
    width: '100%',
    // justifyContent: 'flex-end',
  },
  container_all: {
    flex: 4,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // justifyContent: 'flex-end',
    position: 'relative',
    // justifyContent: 'flex-end',
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
    // flex: 1,
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
    marginBottom: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
export default ProfileScreen;
