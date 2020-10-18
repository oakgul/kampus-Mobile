import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShareAnnounce from '../components/ShareAnnounce';
import SchoolScreen from '../components/School';
import DepartmentScreen from '../components/Department';

const Tab = createBottomTabNavigator();

class AnnounceScreen extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Bölüm" component={DepartmentScreen} />
                <Tab.Screen name="Okul" component={SchoolScreen} />
                {/* <Tab.Screen name="Duyuru" component={ShareAnnounce} /> */}
            </Tab.Navigator>
        )
    }
};

export default AnnounceScreen;
