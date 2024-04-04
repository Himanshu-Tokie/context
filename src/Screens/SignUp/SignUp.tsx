import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import UserImage from '../../customButtons/Image';
import ButtonTemplate from '../../customButtons/buttonTemplate';
import { SignUpData } from '../../utils/util';
export default SignUpPage;


function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  function showData() {
    if(password!=confirmPassword){Alert.alert("Password doesn't matches");setPassword('');setConfirmPassword('');}
    else{switch(""){
      case firstName:
      case lastName:
      case email:
      case phoneNumber:
      case dateOfBirth:
      case password:
      // case confirmPassword:
        Alert.alert("Fill all credentials")
        break;
      default:
    Alert.alert(
      `User Information\n
      First Name : ${firstName}\n
      LastName : ${lastName}\n
      Email ID : ${email}\n
      Phone Number : ${phoneNumber}\n
      Date of Birth : ${dateOfBirth}\n
      `,
    );
  }}}

  return (
    
      <ScrollView style={styles.container}>
        <View>
          <UserImage />
        </View>
        <View style={styles.data}>
          <ButtonTemplate text={SignUpData.FirstName} changeState={setFirstName} />
          <ButtonTemplate text={SignUpData.LastName} changeState={setlastName} />
          <ButtonTemplate text={SignUpData.Email} changeState={setemail} />
          <ButtonTemplate text={SignUpData.PhoneNumber} changeState={setphoneNumber} />
          <ButtonTemplate text={SignUpData.DateOfBirth} changeState={setdateOfBirth} />
          <ButtonTemplate text={SignUpData.Password} changeState={setPassword} />
          <ButtonTemplate text={SignUpData.ConfirmPassword} changeState={setConfirmPassword} isConfirmPassword={password} />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={showData}>
            <Text style={styles.submit}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}

let styles = StyleSheet.create({
  
  data: {
    marginLeft: 50,
    marginRight: 50,
  },
  submit: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  button:{
    backgroundColor:"green",
    borderWidth: 0,
    borderColor: 'grey',
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal:60
  },
  container:{
    // marginBottom:10
  }
});
