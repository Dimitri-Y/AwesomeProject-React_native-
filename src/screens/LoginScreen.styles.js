import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6C00',
    color: '#fff',
    padding: 16,
  },
  containerKeyB: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  passShowText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  passShow: {
    top: -34,
    left: 130,
  },
  registerButton: {
    backgroundColor: '#FF6C00',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 44,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: '400',
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});
export default styles;
