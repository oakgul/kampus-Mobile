import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

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

    render() {
        return (
            <View style={styles.home}>
                <View style={styles.logo}>
                 <Image
                    source={require('../assets/logo.png')} />
                </View>

                

                <View style={styles.Inputs}>
                <Text style={styles.registerText}>Kayıt Ol..</Text>

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Ad'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        // autoCapitalize={'none'}
                        autoCorrect={false}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Soyad'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        // autoCapitalize={'none'}
                        autoCorrect={false}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='E-posta'
                        returnKeyType={"next"}
                        keyboardType='email-address'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Parola'
                        secureTextEntry={true}
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Cinsiyet'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Bölüm'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />

                    <TextInput 
                        style={styles.userInput}
                        placeholder='Statü'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />

                    <TouchableOpacity 
                        onPress={() => alert('Kayıt olundu...')}
                        style={styles.registerButton}
                        >
                        <Text style={styles.reagisterButtonText}>Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>

                
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
        // justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center'
      }, 

      registerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
      },

      Inputs : {
        marginTop: 60
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
})

export default Register;