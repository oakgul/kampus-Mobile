import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'

 class ForgotPasswordScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logo}>
                    <Image 
                        source={require('../assets/logo.png')}
                    />
                </View>
                <View style={styles.inputs}>
                    <Text style={styles.headText}>Hesabını Bul</Text>
                    <Text style={styles.infoText}>Hesabına bağlı e-posta adresini gir.</Text>
                    <TextInput 
                      style={styles.userInput}
                      placeholder='E-posta'
                      returnKeyType={"next"}
                      keyboardType='email-address'
                      autoCapitalize={'none'}
                      autoCorrect={false}
                    //   onChangeText={text => {
                    //     this.setState({
                    //       username : text
                    //     })
                    //   }}
                    //   value={this.state.username}
                    />

                    <TouchableOpacity 
                        style={styles.signButton}
                        onPress={() => alert('E-posta gönderildi...')} 
                    >
                    <Text style={styles.submitButtonText}>İleri</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        alignItems: 'center',
        paddingVertical: 50
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 15,
        paddingVertical: 10
    },
    inputs: {
        flex: 2,
        alignItems: 'center'
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
      submitButtonText: {
        fontSize:20, 
        color:'white', 
        fontWeight: 'bold'
      },

});

export default ForgotPasswordScreen;