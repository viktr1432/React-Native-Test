import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export class Question extends Component {
    render() {
        return (
            <ScrollView style={styles.qust}>
                <Text> textInComponent </Text>
            </ScrollView>
        )
    }
}

export default Question

const styles = StyleSheet.create({
    qust: {}
});