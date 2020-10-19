import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import {connect} from 'react-redux';

class Department extends Component {
    state = {
        announces : [],
        loading : true,
    }

    getAllAnnounce = async () => {
        const res = await fetch('https://kampus-api.herokuapp.com/api/announce', {
              method : 'GET',
              headers: {
                  'Content-type' : 'application/json; charset=UTF-8',
                  'Authorization': 'Bearer: ' + this.props.userReducer.token,
                  }
              })
              const result = await res.json();
              result.data.map(departmentAnnounce => {
                  if(departmentAnnounce.tag == this.props.userReducer.tag){
                      this.setState({
                        announces : [...this.state.announces, departmentAnnounce]
                    })
                  }else{
                    null                     
                  }
              })
    }

    componentDidMount() {
        this.getAllAnnounce();
    }    


    renderAllAnnounce = ({item, index}) => {
        return(
            <TouchableOpacity style={styles.announce}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image} 
                        source={require('../assets/profile.jpg')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.content}</Text>
                    {/* <Text>{item.user}</Text>
                    <Text>{item._id}</Text> */}
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                { this.loading ? <Text>Loading...</Text> : <FlatList 
                renderItem={this.renderAllAnnounce}
                data={this.state.announces}
                keyExtractor={item => item._id}
            /> }

                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Duyuru')}
                    style={styles.shareButton}>
                        <Text style={styles.shareText}>Duyuru</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    announce: {
        flex:1,
        flexDirection:'row',
        height: 80,
        backgroundColor: '#E74C3C',
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 7,
    },
    imageContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    image: {
        width:60,
        height: 60,
        borderRadius: 30
    },
    textContainer: {
        marginTop: 6
    },
    title: {
        fontSize: 18,
        color: 'white'
    },
    shareButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#DAF7A6',
        borderWidth: 1,
        position: "absolute",
        right: 10,
        bottom: 10
    },
    shareText: {
        textAlign: 'center',
        marginTop: 35

    }
});

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Department);