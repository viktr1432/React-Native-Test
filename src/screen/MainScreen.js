import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const MainScreen = ({navigation}) => {
    const CloseScreen = () => {
        navigation.goBack()
    }

    return (
        <View>
            <TouchableOpacity
                onPress={CloseScreen}
            >
                <Text style={styles.mainText}>
                    Hello
            </Text>
            </TouchableOpacity>
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: '2'
}
const styles = StyleSheet.create({
    mainText: {
        fontSize: 25,
        color: "red"
    }
});