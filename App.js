import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weather from './Weather'

export default class App extends React.Component {
    doIt = () => {
        console.log("Hello from console")
    }
    render() {
        return (
            <Weather zipCode="90000"/>
        );
    }
}
