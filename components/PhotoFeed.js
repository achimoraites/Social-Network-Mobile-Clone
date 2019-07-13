import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PhotoSection from './PhotoSection';
import axios from 'axios';


export default class PhotoFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
        photos: []
    };
  }


  componentDidMount() {
    axios.get('http://10.0.2.2:3000/photos')
        .then(res => {
            this.setState({photos: res.data});
        })
        .catch(e => {
            console.log(e);
        })
  }

  getPhotos() {
    return this.state.photos.map(_photo => {
        return (<PhotoSection key={_photo.id} photo={_photo} />);
    })
  }

  render() {
    return (
      <ScrollView>
        {this.getPhotos()}
      </ScrollView>
    );
  }
}
