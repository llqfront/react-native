import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
class Pages extends React.Component {
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
                    onPress={() => this.props.navigation.push('Settings', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.push('Profile')}
                />
            </View>
        );
    }
}
export default Pages;