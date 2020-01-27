import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native'

export const Autorisation = (props) => {
    return (
        <View style={styles.autorisContent}>
            <Text style={styles.autorisTitle}>
                Авторизация
            </Text>
            <Button
                style={styles.autorisBtn}
                title='Войти'
                onPress={() => Alert.alert('Cannot press this one')} />
        </View>
    )
}


const styles = StyleSheet.create({
    autorisContent: {

    },
    autorisTitle: {
        color: '#fff',
        fontSize: 25,
        marginBottom: 20,
    },
})