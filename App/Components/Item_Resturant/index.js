import React, {Component} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import Styles from './Style';

class Item_Resturant extends Component {
  render() {
    const {restaurant, containerStyle, onPress} = this.props;
    console.log('restaurant.logo---------------', restaurant.logo);
    return (
      <TouchableOpacity onPress={onPress} style={[Styles.container, containerStyle]}>
        <Image
          source={{uri: restaurant.logo.replace('http://', 'https://')}}
          style={Styles.image}
        />
        <View style={Styles.view_data}>
          <Text style={Styles.text_title}>{restaurant.name}</Text>
          <Text style={Styles.text_tags}>
            {restaurant.tags.map(
              (item, index) =>
                `${item.name}${
                  index == restaurant.tags.length - 1 ? '' : ','
                } `,
            )}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Item_Resturant;
