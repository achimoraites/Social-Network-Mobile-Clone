import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PhotoSection from './PhotoSection';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';


 class PhotoFeed extends Component {
  constructor(props) {
    super(props);
    this.api = 'http://10.0.2.2:3000';
    this.state = {
        photos: []
    };
  }


  componentDidMount() {
    this.props.getPhotos();
  }

  renderPhotos() {
    return this.props.photos.map(_photo => {
        return (<PhotoSection key={_photo.id} photo={_photo} />);
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderPhotos()}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}
export default connect(mapStateToProps, { getPhotos })(PhotoFeed);