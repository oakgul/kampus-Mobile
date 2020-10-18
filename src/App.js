import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import AnnounceScreen from './screens/AnnounceScreen';

const Stack = createStackNavigator();

class App extends Component {
  render() {  
    return(
    <NavigationContainer>
      <Stack.Navigator>
        { this.props.userReducer.token == null ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        )}
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="Announce" component={AnnounceScreen} />
      </Stack.Navigator>  
    </NavigationContainer>
    )
  }
};

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(App);
