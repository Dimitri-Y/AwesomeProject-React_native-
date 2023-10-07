import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import PostComponent from './PostComponent';

const PostsList = ({ option, catalog, navigation }) => {
  // console.log(navigation.getState().routes[navigation.getState().index]);
  return option === 'profile' ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={catalog}
        renderItem={({ item }) => (
          <PostComponent
            imageURL={item.imageURL}
            title={item.title}
            comments={item.comments}
            likes={item.likes}
            location={item.location}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.catalog}
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={catalog}
        renderItem={({ item }) => (
          <PostComponent
            imageURL={item.imageURL}
            title={item.title}
            comments={item.comments}
            location={item.location}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.catalog}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  catalog: {
    flex: 1,
    flexDirection: 'column',
    gap: 32,
    padding: 16,
  },
});
export default PostsList;
