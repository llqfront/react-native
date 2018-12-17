import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

class Pages extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>SettingsScreen</Text>

                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>);
    }
}
export default Pages;