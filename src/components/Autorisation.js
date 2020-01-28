import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { THEME } from '../theme';

export const Autorisation = ({ navigation }) => {
    const GoToMainScreen = () => {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.autorisContent}>
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.autorisBtn}>
                    <Button
                        title='Войти'
                        color={THEME.BTN_COLOR}
                        onPress={GoToMainScreen}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

Autorisation.navigationOptions = {
    headerTitle: 'Авторизация',
}

const styles = StyleSheet.create({
    autorisContent: {
        backgroundColor: THEME.BODY_COLOR,
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: THEME.PADDING_GORIZONTAL,
    },
    autorisBtn: {
        width: '100%',
    }
})