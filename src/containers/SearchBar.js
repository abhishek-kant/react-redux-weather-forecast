import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FontIcon from 'material-ui/FontIcon';
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
export default SearchBar