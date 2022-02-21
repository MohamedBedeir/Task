import React, {Component} from 'react';
import Resturant from '../Containers/Resturant';
export default class RestaurantScreen extends Component {
  render() {
    return (
      <Resturant 
        openRestaurantDetails={item =>
          this.props.navigation.navigate('ResturantDetails', {item})
        }
    />
    );
  }
}
