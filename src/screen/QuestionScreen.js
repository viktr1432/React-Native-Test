import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class QuestionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1goe3g')
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

    render() {
        return (
            <View>
                <Text> QuestionScreen </Text>
            </View>
        );
    }
}
