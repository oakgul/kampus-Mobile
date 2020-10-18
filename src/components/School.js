import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import {connect} from 'react-redux';

class School extends Component {
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
              this.setState({
                announces : result.data
              })
            //   console.log(result.data);

    }

    componentDidMount() {
        this.getAllAnnounce();
    }    


    renderAllAnnounce = ({item, index}) => {
        return(
            <TouchableOpacity 
                onPress={() => alert('Duyuruyu okuyorsunuz...')}
                style={styles.announce}>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
                <Text>{item.user}</Text>
                <Text>{item._id}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                { this.loading ? <Text>Loading...</Text> : <FlatList 
                renderItem={this.renderAllAnnounce}
                data={this.state.announces}
            /> }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    announce: {
        height: 80,
        backgroundColor: '#FFC300',
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        borderRadius: 7,
    }
});

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(School);