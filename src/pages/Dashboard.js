import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../components/ProfileScreen';
import SchoolScreen from '../components/SchoolScreen';
import DepartmentScreen from '../components/DepartmentScreen';

const Tab = createBottomTabNavigator();

class Dashboard extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Profil" component={ProfileScreen} />
                <Tab.Screen name="Okul" component={SchoolScreen} />
                <Tab.Screen name="Bölüm" component={DepartmentScreen} />
            </Tab.Navigator>
        )
    }
};

export default Dashboard;
