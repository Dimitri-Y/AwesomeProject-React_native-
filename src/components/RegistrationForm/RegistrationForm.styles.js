import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  register_form: {
    backgroundColor: '#fff',
  },
  h_text: {
    fontFamily: 'Roboto-500',
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: 'center',
    marginBottom: 32,
  },
  group: {
    backgroundColor: '#fff',
  },
  input: {
    fontFamily: 'Roboto-400',
    fontWeight: '400',
    fontSize: 16,
    height: 50,
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 16,
  },
  input_pass_BG: {
    position: 'relative',
  },
  inputMailPass: {
    backgroundColor: '#F6F6F6',
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    position: 'relative',
  },
  passShowText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  passShow: {
    position: 'absolute',
    // top: -34,
    top: 16,
    right: 32,
  },
});
export default styles;
