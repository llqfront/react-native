import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>);
    }
}
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                {/* <Button
                    title="Go to Details... again"
                    // onPress={() => this.props.navigation.navigate('Details')} // 不跳转
                    onPress={() => this.props.navigation.push('Details')} // 同一路由跳转
                /> */}
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />

                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.push('Settings')}
                />
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.push('Profile')}
                />
            </View>
        );
    }
}
class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>SettingsScreen</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>);
    }
}
class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>ProfileScreen</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>);
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen
});
const SettingsStack = createStackNavigator({
    Details: DetailsScreen,
    Settings: SettingsScreen,
    Profile: ProfileScreen,
});
const AppNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Details: SettingsStack
    },
    {
        initialRouteName: "Home"
    }
);
// const AppContainer = createAppContainer(AppNavigator);

export default createAppContainer(AppNavigator);