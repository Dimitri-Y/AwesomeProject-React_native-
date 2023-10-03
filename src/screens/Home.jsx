import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import CreatePostsScreen from './CreatePostsScreen';
import PostScreen from './PostScreen';

const Tab = createBottomTabNavigator();

const options = {
  title: 'Публікація',
  // headerTitle: () => (
  //   <Header title={'Створити публікацію'} option={'createPosts'} />
  // ),
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontFamily: 'Roboto-500',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    // marginTop: 28,
    marginLeft: 'auto',
  },
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  return <View></View>;
};
<View style={styles.footer}>
  <TouchableOpacity
    style={styles.gridButton}
    activeOpacity={0.5}
    onPress={() => navigation.navigate('Posts')}
  >
    <AntDesign name="appstore-o" size={24} color="black" />
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.addPostButton}
    activeOpacity={0.5}
    onPress={() => navigation.navigate('CreatePosts')}
  >
    <AntDesign name="plus" size={13} color="white" />
  </TouchableOpacity>
  <TouchableOpacity style={styles.userButton} activeOpacity={0.5}>
    <AntDesign name="user" size={24} color="black" />
  </TouchableOpacity>
</View>;

const styles = StyleSheet.create({
  footer: {
    // flex: 1,
    padding: 16,
    borderTopColor: '#0000004D',
    borderTopWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
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

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Posts" component={PostScreen} />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        // options={{  }}
      />
    </Tab.Navigator>
  );
}
