import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Avatar, ListItem } from 'react-native-elements';
import Header from '../components/Header';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Header text="Profile" />
                <Card>
                    <ListItem
                        leftAvatar={{
                            title: 'BP',
                            size: 'large',
                            source: { uri:  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' },
                            showEditButton: false,
                        }}
                        title={'Beatrice Peterson'}
                        subtitle={'Fulltime Stalker'}
                        chevron
                    />
                </Card>
            </View>
        );
    }
}
