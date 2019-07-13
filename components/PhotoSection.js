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
                        source={{ uri: this.props.photo.user_avatar }} />
                    <View style={{justifyContent: 'center', padding: 5 }}>
                        <Text style={styles.username}>{this.props.photo.username}</Text>
                    </View>

                </View>
                <View>
                    <Image
                        style={{ height: 300 }}
                        source={{ uri: this.props.photo.image }} />
                </View>
                <View style={{paddingTop: 10, paddingBottom: 10}}>
                    <Ionicons
                    name="ios-heart-empty"
                    size={30}
                    />
                </View>
                <View style={styles.imageInfo}>
                    <Text style={styles.username}>{this.props.photo.username}</Text>
                    <Text>{this.props.photo.caption}</Text>
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
