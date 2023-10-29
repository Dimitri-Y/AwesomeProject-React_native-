import Container from '../components/Container';
import { KeyboardAvoidingView, Platform, View, StyleSheet } from 'react-native';
import PostsList from '../components/PostsList';
import { useRoute } from '@react-navigation/native';

const catalog = [
  {
    imageURL: '../../assets/images/1.png',
    title: 'Ліс',
    comments: 8,
    likes: 153,
    location: {
      locationName: 'Ukraine',
      locationURL: { latitude: 48.66062, longitude: 23.086478 },
    },
  },
  {
    imageURL: '../../assets/images/2.png',
    title: 'Захід на Чорному морі',
    comments: 3,
    likes: 200,
    location: {
      locationName: 'Ukraine',
      locationURL: { latitude: 46.512609, longitude: 30.740698 },
    },
  },
  {
    imageURL: '../../assets/images/3.png',
    title: 'Старий будиночок у Венеції',
    comments: 50,
    likes: 200,
    location: {
      locationName: 'Italy',
      locationURL: { latitude: 41.910354, longitude: 12.453003 },
    },
  },
];

const PostScreen = ({ navigation }) => {
  const route = useRoute();
  // let { imageURL, title, comments, likes, location } = route.params;

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
        style={styles.containerKeyB}
        // enabled
      >
        <View style={styles.container}>
          <View style={styles.main}>
            <PostsList
              catalog={
                route.params
                  ? [
                      ...catalog,
                      {
                        imageURL: route.params.imageURL,
                        title: route.params.title,
                        comments: route.params.comments,
                        likes: route.params.likes,
                        location: route.params.location,
                        navigation: route.params.navigation,
                      },
                    ]
                  : catalog
              }
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
    // marginTop: 32,
    marginBottom: 'auto',
  },
});

export default PostScreen;
