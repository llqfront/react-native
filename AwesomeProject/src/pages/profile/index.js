import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

class Pages extends React.Component {
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
export default Pages;