import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator, AsyncStorage, Picker, StatusBar } from 'react-native';
import * as firebase from 'firebase';
import { Icon, FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements';
import { Facebook } from 'expo';
import ModalPicker from 'react-native-modal-picker';

// Make a component
class Signup extends Component {
  state = {
    email: null,
    password: null,
    username: null,
    school: '',
    department: '',    
    error: ' ',
    loading: false,
    saving: false,
    showSpinner: false,
    token: null,
    status: 'Not Login...',
    
  };

  facebookLogin = async () => {
    console.log('Testing token....');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('Already having a token...');
      this.setState({ token });

      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.setState({ status: `Hello ${(await response.json()).name}` });
      console.log(response);

    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };

  doFacebookLogin = async () => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1184175101694797',
      {
        permissions: ['public_profile'],
        behavior: 'web'
      });

    if (type === 'cancel') {
      console.log('Login Fail!!');
      return;
    }

    await AsyncStorage.setItem('fb_token', token);
    this.setState({ token });
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    this.setState({ status: `Hello ${(await response.json()).name}` });
    console.log(response);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`currentUser = ${currentUser.uid}`);
      this.props.navigation.navigate('Home');
    } catch (err) {

    }
  };

  onSaveInfo = async () => {
    
    const { currentUser } = firebase.auth();
    const { email, username, school, department } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.set({  username, email, school, department });

    console.log('check the saving funcrtion~~~~~~~~');
  }

  onCreateUser = async () => {
    const { email, password } = this.state;
    this.setState({ saving: true });
    try {

      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const { currentUser } = firebase.auth();
      let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
      await dbUserid.set({  username: "", email: "", school: "", department: "" });
      
      try{ 
        this.onSaveInfo();
      } catch (err){
        console.log('saving fail!!!!!!!!!!!');
      }
      this.setState({ saving: false });
      this.props.navigation.navigate('Home');
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        username: null,        
        error: err.message,
        loading: false,
        showModal: false
      });
    }
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <Button
        title='Sign up'
        backgroundColor='#4AAF4C'
        onPress={this.onCreateUser}
        style={styles.signupBtn}
      />
    );
  }

  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }

  render() {
    let index = 0;
        const schoolData = [
            // { key: index++, section: true, label: 'Fruits' },
            { key: index++, label: '國立台灣大學' },
            { key: index++, label: '國立台北教育大學' },
            { key: index++, label: '國立清華大學' },
            { key: index++, label: '國立交通大學' },
            { key: index++, label: '國立政治大學' },
            // { key: index++, section: true, label: 'Vegetables' },
            { key: index++, label: '國立臺北大學' },
            { key: index++, label: '亞洲大學' },
            { key: index++, label: '東海大學' },
            { key: index++, label: '世新大學' },
            { key: index++, label: '中國文化大學' },
            { key: index++, label: '天主教輔仁大學' },
            { key: index++, label: '東吳大學' },
            { key: index++, label: '僑光科技大學' }
        ];

        const departmentData = [
            // { key: index++, section: true, label: 'Fruits' },
            { key: index++, label: '數位科技設計系' },
            { key: index++, label: '教育學系' },
            { key: index++, label: '兒童與英語教育學系' },
            { key: index++, label: '資訊科學系' },
            { key: index++, label: '自然科學教育學系' },
            // { key: index++, section: true, label: 'Vegetables' },
            { key: index++, label: '教育與經營管理學系' },
        ];
 
    console.log(this.state);
    return (
      <View style={styles.signupLayout}>
  
        <View style={styles.formStyle}>
          <FormLabel labelStyle={styles.formLabel}>姓名</FormLabel>
          <FormInput
            containerStyle={styles.formBorder}
            inputStyle={styles.formInput}
            placeholder='Your name'
            autoCorrect={false}
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <FormLabel labelStyle={styles.formLabel}>電子信箱</FormLabel>
          <FormInput
            containerStyle={styles.formBorder}
            inputStyle={styles.formInput}
            placeholder='user@email.com'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <FormLabel labelStyle={styles.formLabel}>密碼</FormLabel>
          <FormInput
            containerStyle={styles.formBorder}
            inputStyle={styles.formInput}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <FormLabel labelStyle={styles.formLabel}>學校</FormLabel>
          <ModalPicker
              data={schoolData}
              initValue=""
              onChange={(option)=>{ this.setState({school:option.label})}}>
              
              <TextInput
                  style={styles.pickerInput}
                  editable={false}
                  placeholder="選擇你就讀的學校"
                  value={this.state.school} 
              />
              <Icon 
                name='arrow-drop-down'
                style={styles.dropDownIcon}
              />                     
          </ModalPicker>

          <FormLabel labelStyle={styles.formLabel}>科系</FormLabel>      
          <ModalPicker
              data={departmentData}
              initValue=""
              onChange={(option)=>{ this.setState({department:option.label})}}
              style={styles.modalPicker} >
              
              <TextInput
                  style={styles.pickerInput}
                  editable={false}
                  placeholder="選擇你就讀的科系"
                  value={this.state.department}                   
              />             
              <Icon 
                name='arrow-drop-down'
                style={styles.dropDownIcon}
              />     
          </ModalPicker>    
          {this.renderButton()}
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
        </View>
        <View style={styles.formStyle}>
          <Button
            title='Sign up with Facebook'
            backgroundColor='#39579A'
            onPress={this.facebookLogin}
            style={{ marginTop: -60 }}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  signupLayout: {
    // backgroundColor:'#a6e0d750',
  },
  formStyle: {
    marginTop: 50,
    // flex: 1,
  },
  formLabel: {
    color: '#37bc9b',
  },
  formBorder: {
    borderBottomColor: '#37bc9b',
  },
  formInput: {
    color:'#000'
  },
  modalPicker: {
    // flexDirection: 'row',
    justifyContent:'center',
    // alignItems: 'flex-start',
    // backgroundColor: 'gray',
    marginLeft:15,
    marginRight:15,
    // marginBottom:15,
  },
  pickerInput: {
    borderWidth:1,
    borderColor: '#37bc9b',
    // borderColor:'#ccc', 
    padding:10, 
    height:30, 
    width:345, 
    marginRight:'auto', 
    marginLeft:'auto', 
    marginTop:10,
    marginBottom:10
  },
  dropDownIcon: {
    position: 'absolute',
    // backgroundColor:'red',
    top: 13,
    right: 5,
    // alignSelf:'center',
  },
  signupBtn: {
    marginTop: 30,

  }
};

export default Signup;
