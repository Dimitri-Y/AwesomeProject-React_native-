import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    flex: 1,
    width: '100%',
    // position: 'relative',
  },
  containerKeyB: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    // borderTopRightRadius: 25,
    // borderTopLeftRadius: 25,
    width: '100%',
    flex: 1,
  },
  header: {
    // flex: 1,
    // width: 500,
    padding: 16,
    borderBottomColor: '#0000004D',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    // position: 'relative',
    // box-shadow: 0px 0.5px 0px 0px #0000004D;
  },
  h_text: {
    fontFamily: 'Roboto-500',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 28,
    marginLeft: 'auto',
  },
  exitButton: {
    marginLeft: 'auto',
    marginTop: 28,
    // right: 16,
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  main: {
    flex: 6,
  },
  footer: {
    // flex: 1,
    // width: 500,
    padding: 16,
    borderTopColor: '#0000004D',
    borderTopWidth: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 31,
    // position: 'relative',
    // box-shadow: 0px 0.5px 0px 0px #0000004D;
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
export default styles;
