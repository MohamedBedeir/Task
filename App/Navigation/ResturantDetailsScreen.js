import React, {Component} from 'react';
import ResturantDetails from '../Containers/ResturantDetails';
export default class RestaurantDetailsScreen extends Component {
  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return <ResturantDetails item={item}/>;
  }
}
