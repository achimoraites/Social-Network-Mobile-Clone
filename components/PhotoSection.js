import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class PhotoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userAvatarSection}>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: 'http://www.freeavatarsonline.com/avatars/celebrities/krystal-forscutt-3-100x100.jpg' }} />
                    <View style={{justifyContent: 'center', padding: 5 }}>
                        <Text style={styles.username}>username</Text>
                    </View>

                </View>
                <View>
                    <Image
                        style={{ height: 300 }}
                        source={{ uri: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1072&q=80' }} />
                </View>
                <View style={{paddingTop: 10, paddingBottom: 10}}>
                    <Ionicons
                    name="ios-heart-empty"
                    size={30}
                    />
                </View>
                <View style={styles.imageInfo}>
                    <Text style={styles.username}>username</Text>
                    <Text>caption</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        margin: 5
    },
    userAvatarSection: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    thumbnail: {
        width: 50, 
        height: 50,
        borderRadius: 25,
    },
    imageInfo : {
        flexDirection: 'row',
    },
    username : {
        fontWeight: 'bold',
        paddingRight: 5,
    }

}
