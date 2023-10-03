import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useState, useReducer } from 'react';

import { customAlphabet } from 'nanoid/non-secure';
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

const ArrayInput = [
  {
    type: 'text',
    name: 'login',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title: 'login',
    placeholder: 'Логін',
  },
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

const RegistrationForm = ({ onSubmit, navigation }) => {
  const [isFocused1, SetIsFocused1] = useState(false);
  const [isFocused2, SetIsFocused2] = useState(false);
  const [isFocused3, SetIsFocused3] = useState(false);
  // const [state, dispatch] = useReducer(reducer, {isFocused1:false,isFocused2:false,isFocused3:false})
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'login':
        setName(value);
        break;
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
      login: login,
      password: password,
      id: nanoid(),
    };

    onSubmit(contactData);
    setLogin('');
    setPassword('');
    setEmail('');
    navigation.navigate('Home');
  };
  const passShow = event => {
    setSecureText(!secureText ? false : true);
  };
  return (
    <View style={styles.register_form}>
      <Text style={styles.h_text}>Реєстрація</Text>
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
        key="1"
        type="text"
        name="login"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="login"
        placeholder="Логін"
        onFocus={() => {
          SetIsFocused1(true);
        }}
        onBlur={() => {
          SetIsFocused1(false);
        }}
        style={
          isFocused1 ? [styles.input, styles.inputIsFocused] : [styles.input]
        }
        //  {backgroundColor:this.state.backgroundColor??'#F6F6F6'}
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        type="email"
        name="email"
        pattern="([A-z0-9_.-]{1})@([A-z0-9_.-]{1}).([A-z]{28})"
        title="email"
        placeholder="Адреса електронної пошти"
        onFocus={() => {
          SetIsFocused2(true);
        }}
        onBlur={() => {
          SetIsFocused2(false);
        }}
        style={
          isFocused2 ? [styles.input, styles.inputIsFocused] : [styles.input]
        }
        value={email}
        onChangeText={setEmail}
      />
      <View style={[styles.input_pass_BG]}>
        <TextInput
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7}"
          title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
          placeholder="Пароль"
          secureTextEntry={secureText}
          autoCapitalize="none"
          onFocus={() => {
            SetIsFocused3(true);
          }}
          onBlur={() => {
            SetIsFocused3(false);
          }}
          style={
            isFocused3
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
          <Text style={styles.passShowText}>Показати</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.5}
          onPress={handleSubmit}
        >
          <Text style={styles.registerButtonText}>Зареєструватися</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  register_form: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,

    // width:'100%'
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
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
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
    color: '#1B4371',
  },
});

export default RegistrationForm;
