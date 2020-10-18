import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import { userRegister } from '../redux/actions/userAction';

 class Register extends Component {
    state = {
        name : null,
        surname : null,
        email : null,
        password : null,
        gender : null,
        department : null,
        role : null
    }

    userCreateAccount = () => {
        const user = this.state;
        this.props.onRegisterUser(
            user.name,
            user.surname,   
            user.email,   
            user.password,   
            user.gender,   
            user.department,   
            user.role,   
        );
    }

    render() {
        return (
            <View style={styles.home}>
                <View style={styles.logo}>
                 <Image
                    source={require('../assets/logo.png')} />
                </View>

                
            <ScrollView>
                <View style={styles.Inputs}>
                <Text style={styles.registerText}>Kayıt Ol..</Text>

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Ad'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                name : text
                            })
                        }}
                        value={this.state.name}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Soyad'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                surname : text
                            })
                        }}
                        value={this.state.surname}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='E-posta'
                        returnKeyType={"next"}
                        keyboardType='email-address'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                email : text
                            })
                        }}
                        value={this.state.email}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Parola'
                        secureTextEntry={true}
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                password : text
                            })
                        }}
                        value={this.state.password}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Cinsiyet'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                gender : text
                            })
                        }}
                        value={this.state.gender}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Bölüm'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                department : text
                            })
                        }}
                        value={this.state.department}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Statü'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                role : text
                            })
                        }}
                        value={this.state.role}
                    />

                    <TouchableOpacity 
                        onPress={this.userCreateAccount}
                        style={styles.registerButton}
                        >
                        <Text style={styles.reagisterButtonText}>Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      },

      logo: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
      }, 

      registerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
      },

      Inputs : {
        marginTop: 60,
        paddingVertical: 30
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

      registerButton: {
        width: 300,
        height: 50,
        backgroundColor: '#31B057',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      reagisterButtonText: {
        fontSize:20, 
        color:'white', 
        fontWeight: 'bold'
      },
});

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    onRegisterUser : userRegister,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);