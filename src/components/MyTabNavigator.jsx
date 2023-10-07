import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const MyTabBar = ({ state, descriptors, navigation }) => {
  // navigation.  .routes[state.index].routeName state.routes[state.index].name !== 'CreatePosts'||
  return (
    !['CreatePosts', 'Comments'].includes(state.routes[state.index].name) && (
      <View>
        <View style={styles.footer}>
          {state.routes[state.index].name === 'Posts' ? (
            <TouchableOpacity
              style={styles.headButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Posts')}
            >
              <AntDesign name="appstore-o" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.sideButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Posts')}
            >
              <AntDesign name="appstore-o" size={24} color="black" />
            </TouchableOpacity>
          )}
          {state.routes[state.index].name === 'CreatePosts' ? (
            <TouchableOpacity
              style={styles.headButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('CreatePosts')}
            >
              <AntDesign name="plus" size={13} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.sideButton}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('CreatePosts')}
            >
              <AntDesign name="plus" size={13} color="black" />
            </TouchableOpacity>
          )}
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
    height: 40,
    width: 40,
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
export default MyTabBar;
