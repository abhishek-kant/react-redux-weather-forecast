import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FontIcon from 'material-ui/FontIcon';

import { fetchWeather } from '../actions'

class SearchBar extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      term: ""
    }
  }

  handleChange(event){
    this.setState({term: event.target.value})
  }

  handleFromSubmit(event){
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
    event.preventDefault()
  }
  render(){
    return(
      <form onSubmit={ this.handleFromSubmit.bind(this) }>
        <TextField
          value={this.state.term}
          onChange={ this.handleChange.bind(this) }
          hintText="Search city" />
        <RaisedButton
          label="Search"
          primary={true}
          icon={<ActionSearch />}
        />
      </form>

    )
  }

}


function mapDispatchToProps(disPatch) {
  return bindActionCreators({ fetchWeather }, disPatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)