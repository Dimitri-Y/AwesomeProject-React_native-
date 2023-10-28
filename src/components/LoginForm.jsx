import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useState, useReducer } from 'react';

const ArrayInput = [
  {
    type: 'email',
    name: 'email',
    pattern: '([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})',
    title: 'email',
    placeholder: 'Адреса електронної пошти',
  },
  {
    type: 'password',
    name: 'password',
    pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{7,}',
    title:
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
    placeholder: 'Пароль',
    secureTextEntry: true,
  },
];

const LoginForm = ({ onSubmit, navigation }) => {
  const [isFocused1, SetIsFocused1] = useState(false);
  const [isFocused2, SetIsFocused2] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    const contactData = {
      email: email,
      password: password,
    };

    onSubmit(contactData);
    setPassword('');
    setEmail('');
    navigation.navigate('Home');
  };

  const passShow = event => {
    setSecureText(secureText ? false : true);
  };

  return (
    <View style={styles.login_form}>
      <Text style={styles.h_text}>Увійти</Text>
      {/* <ScrollView style={styles.group}>
        {ArrayInput.map((input,index) => 
          (
          <TextInput 
          key={index}
          type={input.type}
          name={input.name}
          pattern={input.pattern}
          title={input.title}
          placeholder={input.placeholder}
          secureTextEntry={input.secureTextEntry}
          required
          style={styles.input}
        />
        ))}
      </ScrollView> */}
      <TextInput
        type="email"
        name="email"
        pattern="([A-z0-9_.-]{1})@([A-z0-9_.-]{1}).([A-z]{28})"
        title="email"
        placeholder="Адреса електронної пошти"
        onFocus={() => {
          SetIsFocused1(true);
        }}
        onBlur={() => {
          SetIsFocused1(false);
        }}
        style={
          isFocused1 ? [styles.input, styles.inputIsFocused] : [styles.input]
        }
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.input_pass_BG}>
        <TextInput
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7}"
          title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
          placeholder="Пароль"
          secureTextEntry={secureText}
          autoCapitalize="none"
          onFocus={() => {
            SetIsFocused2(true);
          }}
          onBlur={() => {
            SetIsFocused2(false);
          }}
          style={
            isFocused2
              ? [styles.inputMailPass, styles.inputIsFocused]
              : [styles.inputMailPass]
          }
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        <TouchableOpacity
          style={styles.passShow}
          activeOpacity={0.5}
          onPress={passShow}
        >
          <Text style={styles.passShowText}>
            {secureText ? 'Показати' : 'Сховати'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.5}
          onPress={handleSubmit}
        >
          <Text style={styles.loginButtonText}>Увійти</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerLink}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.registerLinkText}>
            Немає акаунту? Зареєструватися
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_form: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    // width: '100%',
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
  inputIsFocused: {
    borderColor: '#FF6C00',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  passShowText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  passShow: {
    position: 'absolute',
    // top: -34,
    top: 16,
    right: 32,
  },
  loginButton: {
    backgroundColor: '#FF6C00',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 44,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '400',
  },
  registerLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  registerLinkText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
});

export default LoginForm;
