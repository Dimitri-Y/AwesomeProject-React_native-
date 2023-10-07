import { Text, View, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from 'expo-vector-icons';
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export const Header = ({ option, title }) => {
  const navigation = useNavigation();
  const state = navigation.getState();
  // const {
  //   params: { history },
  // } = useRoute();state.history[state.history.length - 2]
  // history && console.log(history);
  return option === 'posts' ? (
    <View style={styles.header}>
      <Text style={[styles.h_text, styles.h_text_home]}>{title}</Text>
      <TouchableOpacity
        style={[styles.exitButton, styles.exitButton_home]}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Login')}
      >
        <Entypo name="log-out" size={24} color="black" />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.exitButton}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Posts')}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.h_text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
    marginRight: 'auto',
  },
  h_text_home: {
    marginRight: '0',
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
