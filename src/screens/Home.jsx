import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import CreatePostsScreen from './CreatePostsScreen';
import PostScreen from './PostScreen';
import CommentsScreen from './CommentsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const options = {
  title: 'Публікації',
  // headerTitle: () => (
  //   <Header title={'Створити публікацію'} option={'createPosts'} />
  // ),
  headerStyle: {
    // flex: 1,
    // padding: 16,
    borderBottomColor: '#0000004D',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontFamily: 'Roboto-500',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 28,
    marginLeft: 'auto',
    marginRight: 0,
  },
  headerRight: () => (
    <TouchableOpacity
      style={[styles.exitButton, styles.exitButton_home]}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Login')}
    >
      <Entypo name="log-out" size={24} color="black" />
    </TouchableOpacity>
  ),
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  // navigation.  .routes[state.index].routeName state.routes[state.index].name !== 'CreatePosts'||
  return (
    !['CreatePosts', 'Comments'].includes(state.routes[state.index].name) && (
      <View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.sideButton}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Posts')}
          >
            <AntDesign name="appstore-o" size={24} color="black" />
          </TouchableOpacity>
          {state.routes[state.index].name === 'Profile' ? (
            <TouchableOpacity
              style={styles.headButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Profile')}
            >
              <AntDesign name="user" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.headButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('CreatePosts')}
            >
              <AntDesign name="plus" size={13} color="white" />
            </TouchableOpacity>
          )}
          {state.routes[state.index].name === 'Profile' ? (
            <TouchableOpacity
              style={styles.sideButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('CreatePosts')}
            >
              <AntDesign name="plus" size={13} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.sideButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Profile')}
            >
              <AntDesign name="user" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  );
};

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
  sideButton: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'auto',
  },
  headButton: {
    backgroundColor: '#FF6C00',
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  exitButton: {
    marginTop: 28,
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  exitButton_home: {
    marginLeft: 'auto',
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
      {/* <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        screenOptions={{
          headerShown: true,
      /> 
        navigationOptions={{ tabBarVisible: true }}
      */}
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        screenOptions={{
          headerShown: true,
        }}
        options={({ headerShown: true }, options)}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
