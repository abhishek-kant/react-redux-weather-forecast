import React from "react"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import GoogleMap from './GoogleMap'

const WeatherListItem = ({ listItem }) => {
  const { lat, long } = listItem.item
  return(
    <Card>
      <CardTitle title={listItem.item.title} subtitle="Card subtitle" />
      <CardText>
        <GoogleMap lat={lat} long={long}></GoogleMap>
        <div dangerouslySetInnerHTML={{__html: listItem.item.description}} ></div>
      </CardText>
    </Card>
  )
}

export default WeatherListItem