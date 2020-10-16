import React from 'react'
import { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import Announce from './Announce';

const Dashboard = () => {    
    return (
        <View style={styles.dashboard}>

            <View style={styles.userCard}>
                <View>
                    <Image
                        style={styles.userImage} 
                        source={require('../assets/profile.jpg')} 
                    /> 
                </View>  
                <View style={styles.userInfo}>
                    <View>
                        <Text style={styles.username}>Orhan Akgül</Text>
                        <Text style={styles.userTitle}>Bilgisayar Mühendisi</Text>
                    </View>

                    <View style={styles.items}>
                        <View style={styles.perItems}>
                            <Text>Duyuru</Text>
                            <Text style={styles.counter}>22</Text>
                        </View>
                        <View style={styles.perItems}>
                            <Text>Görev</Text>
                            <Text style={styles.counter}>15</Text>
                        </View>
                        <View style={styles.perItems}>
                            <Text>Sıra</Text>
                            <Text style={styles.counter}>06</Text>
                        </View>
                    </View>
                </View>              
            </View>

            <View style={styles.up}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => alert('Profil Sayfası')} 
                    >
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => alert('Duyurular...')}
                    >
                    <Text style={styles.buttonText}>Duyurular</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.down}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => alert('Görevler...')} 
                    >
                    <Text style={styles.buttonText}>Görevler</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => alert('Sınav Notları...')} 
                    >
                    <Text style={styles.buttonText}>Sınav Notları</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
    
const styles = StyleSheet.create({
    dashboard: {
        flex: 1,        
    },
    userCard: {
        // height: 200,
        flexDirection: 'row',
        backgroundColor: '#DAF7A6',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    userImage: {
        marginTop:10,
        width: 100,
        height: 100,
        borderRadius: 50
        
    },
    username: {
        fontSize: 20,
    },
    userTitle: {
        fontSize: 15,
        color: 'gray',
    },
    items: {        
        width: 230,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 20,
        backgroundColor: '#D5D8DC',
    },
    perItems: {
        alignItems: 'center'
    },
    counter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    userInfo: {
        marginHorizontal: 20
    },

    up:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    down:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    button: {
        width: 150,
        height: 100,
        backgroundColor: 'lightblue',
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 30
        
    }
  });

export default Dashboard;