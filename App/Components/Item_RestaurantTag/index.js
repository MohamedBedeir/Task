import React, {Component} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import Styles from './Style';

class Item_RestaurantTag extends Component {
  render() {
    const {item, onPress} = this.props;
    return (
      <TouchableOpacity style={Styles.container} onPress={onPress}>
        <Image
          source={{uri: item.image.replace('http://', 'https://')}}
          style={Styles.image}
        />
        <Text style={Styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default Item_RestaurantTag;
