import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CardFavoriteStackScreen, HomeStackScreen} from './_stackNavigation';

const Tab = createBottomTabNavigator();
//Declare diferentes tab for tab navigation
const _tabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Marvel List"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="donut-large" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={CardFavoriteStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="map" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default _tabNavigation;
