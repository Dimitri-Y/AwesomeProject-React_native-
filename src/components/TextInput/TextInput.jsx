import {TextInput} from "react-native";
import styles from '../RegistrationForm/RegistrationForm.styled';

const Input = ({type,name,title,pattern}) => {
    return(
        <TextInput
                type={type}
                name={name}
                pattern={pattern}
                title={title}
                required
                style={styles.input}
              />
              );
}
export default Input; 