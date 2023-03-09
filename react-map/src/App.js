import { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map
        google = {this.props.google}
        style = {{width:"100%", height:"100%"}}
        zoom = {13}
        initialCenter = {
          {
          lat: 48.8999964,
          lng: 37.0166666
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDVNarC7n1sUTH2VrwZ9iyE-EYEYBgaKXc"
})(MapContainer);
