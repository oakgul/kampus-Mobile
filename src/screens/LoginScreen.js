import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { userSign } from '../redux/actions/userAction';

class LoginScreen extends Component {
  state = {
    username : null,
    password : null,
  }

  userLogin = () => {
    this.props.onUserLogin(this.state.username, this.state.password);
  }

  render() {
    return (
          <View style={styles.home}>
          <View style={styles.logo}>
            <Image
            source={require('../assets/logo.png')} />
          </View>
         
          {/* <Text> { this.props.userReducer.token } </Text>
          <Text> { this.props.userReducer.tag } </Text> */}


          <View style={styles.homeInputs}>
            <Text style={styles.sign}>Giriş Yap</Text>
            <TextInput 
              style={styles.userInput}
              placeholder='Username'
              returnKeyType={"next"}
              keyboardType='email-address'
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={text => {
                this.setState({
                  username : text
                })
              }}
              value={this.state.username}
            />
  
            <TextInput 
              style={styles.userInput}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize={'none'}
              onChangeText={text => {
                this.setState({
                  password : text
                })
              }}
              value={this.state.password}
              
            />
  
            <TouchableOpacity 
              style={styles.signButton}
              onPress={this.userLogin} 
            >
              <Text style={styles.signButtonText}>Giriş Yap</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgot')} 
              style={styles.forgotPassword}>
              <Text style={{color:'#1877f2'}}>Şifremi unuttum</Text>
            </TouchableOpacity>
  
            <View style={{borderBottomWidth: 1, borderColor: '#CEBEBA'}}></View>
  
            <View style={styles.account}>
              <Text style={{color:'#CEBEBA', marginRight: 10}}>Hesabın yok mu?</Text>
              <TouchableOpacity 
                // onPress={() => alert('Hesap Oluştur sayfası')}
                onPress={() => this.props.navigation.navigate('Register')}
                style={styles.forgotPassword}>
                <Text style={{color:'#1877f2'}}>Hesap oluştur</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  homeInputs: {
    flex: 2
  },
  sign: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  userInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CEBEBA',
    marginBottom: 15, 
    paddingVertical: 10,
    paddingLeft: 15   
  },
  signButton: {
    width: 300,
    height: 50,
    backgroundColor: '#31B057',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signButtonText: {
    fontSize:20, 
    color:'white', 
    fontWeight: 'bold'
  },
  forgotPassword: {
    paddingVertical: 20,
    alignItems: 'flex-end',
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {
  onUserLogin : userSign
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
