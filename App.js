import React from 'react';
import Notes from '@/components/pages/Notes';
import AddNotes from '@/components/pages/AddNotes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import reducer from '@/store/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ModalsComponent from '@/components/common/ModalsComponent';
import ErrorComponent from '@/components/common/ErrorComponent';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '#/RootNavigation';
import GeoLocationComponent from '@/components/common/GeoLocationComponent';
import MainBlockStyles from '@/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigation() {
  return (
    <Tab.Navigator tabBarOptions={{tabStyle: MainBlockStyles.justifyContentCenter}}>
      <Tab.Screen name="Notes List" component={Notes} />
      <Tab.Screen name="AddNotes" component={AddNotes} />
      <Tab.Screen name="Other" component={GeoLocationComponent} />
    </Tab.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={TabNavigation} />
      <Stack.Screen name="Error" component={ErrorComponent} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {

  render() {

    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer ref={navigationRef}>
          <MyStack />
        </NavigationContainer>
        <ModalsComponent />
      </Provider>
    );
  }
}

