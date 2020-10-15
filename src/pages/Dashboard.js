import React from 'react'
import { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import Announce from './Announce';

const Dashboard = () => {    
    return (
        <View style={styles.dashboard}>
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