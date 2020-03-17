import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import baseStyle from "../styles/base";

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Text>Scheduled Escorts Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...baseStyle.container
    }
});