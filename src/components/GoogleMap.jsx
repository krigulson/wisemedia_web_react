import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMapMarker from '@fortawesome/fontawesome-free-solid/faMapMarker'

const AnyReactComponent = ({ text }) => {
  return(
    <div>
      <span className="icon has-text-danger">
        <FontAwesomeIcon icon={faMapMarker} size={'3x'} />
      </span>
      {text}
    </div>
  )
}
class Map extends Component {
  static defaultProps = {
    center: { lat: 58.377711, lng: 26.733678 },
    zoom: 16,
    key: 'AIzaSyBUiWMKa53pDxBV3DxTOGfnN0KDTxE7sTI'
  }
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={"Wisemedia is here!" }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
