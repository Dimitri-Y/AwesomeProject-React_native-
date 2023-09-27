import { Text, TextInput, View,ScrollView,TouchableOpacity } from 'react-native';
import styles from './LoginForm.styled';

const ArrayInput=[
  {
    type:"email",name:"email",pattern:"([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})",title:"email",placeholder:"Адреса електронної пошти",
  },
  {
    type:"password",name:"password",pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters", placeholder:"Пароль",secureTextEntry:true,
  }
]

const LoginForm = () => {
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
    style={styles.input}
    />
      <View style={styles.input_pass_BG}>      
      <TextInput
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7}"
          title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
          placeholder="Пароль"
          secureTextEntry={true}
          style={[styles.inputMailPass]}
      >        
      </TextInput>
      <TouchableOpacity
          style={styles.passShow}
          activeOpacity={0.5}
        >
          <Text style={styles.passShowText}>Показати</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.5}
        >
          <Text style={styles.loginButtonText}>Увійти</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerLink}
          activeOpacity={0.5}
        >
          <Text style={styles.registerLinkText}>
          Немає акаунту? Зареєструватися
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
