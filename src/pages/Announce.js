import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShareAnnounce from '../components/ShareAnnounceScreen';
import SchoolScreen from '../components/SchoolScreen';
import DepartmentScreen from '../components/DepartmentScreen';

const Tab = createBottomTabNavigator();

class Dashboard extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Okul" component={SchoolScreen} />
                <Tab.Screen name="Bölüm" component={DepartmentScreen} />
                <Tab.Screen name="Duyuru" component={ShareAnnounce} />
            </Tab.Navigator>
        )
    }
};

export default Dashboard;
