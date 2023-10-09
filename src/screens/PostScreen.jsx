import Container from '../components/Container';
import { KeyboardAvoidingView, Platform, View, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import PostsList from '../components/PostsList';

const catalog = [
  {
    imageURL: '../../assets/images/1.png',
    title: 'Ліс',
    comments: 8,
    likes: 153,
    location: 'Ukraine',
  },
  {
    imageURL: '../../assets/images/2.png',
    title: 'Захід на Чорному морі',
    comments: 3,
    likes: 200,
    location: 'Ukraine',
  },
  {
    imageURL: '../../assets/images/3.png',
    title: 'Старий будиночок у Венеції',
    comments: 50,
    likes: 200,
    location: 'Italy',
  },
];

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
          <View style={styles.main}>
            <PostsList
              catalog={catalog}
              navigation={navigation}
              option={'posts'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
    flex: 1,
  },
  containerKeyB: {
    flex: 1,
    width: '100%',
  },
  main: {
    flex: 1,
    marginTop: 32,
    marginBottom: 'auto',
  },
});

export default PostScreen;
