import React, {Component} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import Images from '../../Config/Images';
import Styles from './Style';
class Item_RestaurantItem extends Component {
  render() {
    const {restaurant_item, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={Styles.container}>
        <View style={Styles.view_data}>
          <Text style={Styles.text_title}>{restaurant_item.name}</Text>
          <Text style={Styles.text_description}>
            {restaurant_item.description}
          </Text>
          <Text style={Styles.text_price}>{restaurant_item.price}</Text>
        </View>
        <View style={Styles.view_image}>
          <Image
            source={Images.item}
            style={Styles.image}
          />
          {restaurant_item.in_cart && (
            <View style={Styles.view_icon}>
              <Image source={Images.bag_dark} style={Styles.icon} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default Item_RestaurantItem;
