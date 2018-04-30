import React from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAtEIDMy5l_7y8bZAeytovChGugymppVUE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{
      height: `200px`,
      position: 'relative',
      bottom: 0,
      top: '500px',
      width: '800px',
      left: '25%',
    }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16} defaultCenter={{ lat: 58.3775219, lng: 26.7310817 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 58.3775219, lng: 26.7310817 }} />
    )}
  </GoogleMap>
));

export default Map;
