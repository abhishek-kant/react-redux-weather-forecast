import React from 'react';

export default class GoogleMap extends React.Component{

  componentDidMount(){
    const google  = window.google
    debugger
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.long)
      }
    })
  }

  render(){
    return <div style={{height: 250, width: 250}} ref="map"></div>
  }

}