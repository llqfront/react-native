// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './home'
import DetailsScreen from './detail'
import SettingsScreen from './settings'
import ProfileScreen from './profile'

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        initialRouteName: "Home"
    }
);
const SettingsStack = createStackNavigator(
    {
        Details: DetailsScreen,
        Settings: SettingsScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: "Details"
    }
);
const AppNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Details: SettingsStack
    }
);
// const AppContainer = createAppContainer(AppNavigator);

export default createAppContainer(AppNavigator);