import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux';
import {shareAnAnnounce} from '../redux/actions/userAction';

class ShareAnnounce extends Component {

    state = {
        title : null,
        content : null,
        department : null,
        token : this.props.userReducer.token
    }

    shareAnnounce = () => {
        const {title,content,department, token} = this.state;
        this.props.onShareAnnounce(title,content,department,token);
    }

    render() {
        return (
            <View style={styles.Inputs}>
                <Text style={styles.announceText}> Duyuru Paylaş </Text>
                <TextInput 
                        style={styles.userInput}
                        placeholder='Duyuru Başlığı'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                title : text
                            })
                        }}
                        value={this.state.title}
                    />
                    <TextInput 
                        style={styles.userInput}
                        placeholder='Duyuru yaz...'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                content : text
                            })
                        }}
                        value={this.state.content}
                    />
                    <TextInput 
                        style={styles.userInput}
                        placeholder='okul,bilgisayar,kimya,tab'
                        returnKeyType={"next"}
                        // keyboardType='name'
                        autoCorrect={false}
                        onChangeText={text => {
                            this.setState({
                                department : text
                            })
                        }}
                        value={this.state.department}
                    />
                    <TouchableOpacity 
                        onPress={this.shareAnnounce}
                        style={styles.shareAnnounceButton}
                        >
                        <Text style={styles.reagisterButtonText}>Duyuru Yayınla</Text>
                    </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    home: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    announceText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10
    },
    Inputs : {
      marginTop: 30,
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
    shareAnnounceButton: {
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
    onShareAnnounce : shareAnAnnounce
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareAnnounce);