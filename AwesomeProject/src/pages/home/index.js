import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
class Pages extends React.Component {
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
export default Pages;