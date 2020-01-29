import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export const MainScreen = ({ navigation }) => {
    const CloseScreen = () => {
        navigation.goBack()
    }
    const getQuestion = () => {
        navigation.navigate('AllQuestion')
    }

    return (
        <View style={styles.qustBtn}>
            <View style={styles.button}>
                <Button
                    title='Список вопросов'
                    onPress={getQuestion}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Выход'
                    color='#757575'
                    onPress={CloseScreen}
                />
            </View>
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Игра - вопрос:ответ'
}

const styles = StyleSheet.create({
    qustBtn: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: "row",
        margin: 5,
        justifyContent: "space-between",
    },
    button: {
        width: '45%',
        marginBottom: 10,
    }
});