import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6C00',
    color: '#fff',
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  containerKeyB: {
    justifyContent: 'flex-end',
    // backgroundColor: '#fff',
    // borderTopRightRadius: 25,
    // borderTopLeftRadius: 25,
    // width: '100%',
  },
  image: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  photoContainer: {
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
});
export default styles;
