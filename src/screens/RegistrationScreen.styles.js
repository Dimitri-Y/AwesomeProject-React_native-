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
  },
});
export default styles;
