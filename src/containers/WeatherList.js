import React from  'react';
import { connect } from 'react-redux'
import WeatherListItem from '../components/WeatherListItem'


class WeatherList extends React.Component{

  renderList(){
   return this.props.results.map((item) => {
      return <WeatherListItem key={item.link} listItem={item} />
    })
  }

  render(){
    return this.renderList();
  }

}

function mapStateToProps(state) {
  return {
    results: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList)