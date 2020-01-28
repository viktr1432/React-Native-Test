import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

export default class Navbar extends Component {
    render() {
        return (
            <View style={styles.navbar}>
                <Button
                    title='Список вопросов'
                    onPress={() => { }}
                />
                <Button
                    title='Выйти'
                    onPress={() => { }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        alignItems: 'flex-end',
    }
});