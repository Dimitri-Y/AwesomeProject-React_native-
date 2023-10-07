import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import PostScreen from '../screens/PostScreen';
import CommentsScreen from '../screens/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Header } from '../components/Header';
import MyTabBar from '../components/MyTabNavigator';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={{
          headerTransparent: false,
          header: ({ navigation }) => (
            <Header navigation={navigation} option="posts" title="Публікації" />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerTransparent: false,
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              option="createPosts"
              title="Створити Публікацію"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // headerTransparent: true,
          // headerTitle: '',
          // headerStyle: {
          //   // back: undefined,
          //   height: 150,
          //   backgroundColor: 'transparent',
          // },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTransparent: false,
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              option="comments"
              title="Коментарі"
            />
          ),
          // state: state,
        }}
      />
    </Tab.Navigator>
  );
}
