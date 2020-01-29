import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { THEME } from '../theme';
import { ThemeColors } from 'react-navigation';

export class AllQuestionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/8561o')
            .then((res) => res.json())

            .then((resJson) => {
                this.setState({
                    data: resJson,
                    isLoading: false,
                })
                console.log(this.state)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _onPressButton = () => {
        console.log('click!')
    }

    render() {
        let state = this.state

        if (state.isLoading) {
            return (
                <View style={styles.isLoading}>
                    <ActivityIndicator />
                </View>
            )
        }

        if (!state.data.url) {
            return (
                <ScrollView style={styles.content}>
                    <View >
                        {this.state.data.map(t =>
                            <View>
                                <TouchableOpacity>
                                    <Text
                                        key={t.title}
                                        style={styles.text}
                                    >{t.title}</Text>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity
                                        onPress={this._onPressButton}
                                    >
                                        <Text
                                            key={t.url}
                                            style={styles.url}
                                        >{t.url}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                </ScrollView>
            )
        }
        // if (state.data.url == false) {
        //     return (
        //         <ScrollView style={styles.content}>
        //             <View>
        //                 {this.state.data.map(t =>
        //                     <TouchableOpacity>
        //                         <Text style={styles.text}>{t.title}</Text>
        //                     </TouchableOpacity>
        //                 )}
        //             </View>
        //         </ScrollView>
        //     )
        // }



    }
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: THEME.BODY_COLOR,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: THEME.TEXT_COLOR_WHITE,
    },
    url: {
        color: THEME.TEXT_COLOR_WHITE,
        marginBottom: 50,
    },
    isLoading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: THEME.BODY_COLOR,
    }
});