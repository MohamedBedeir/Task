import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import Styles from './Style';

class Item_Buttonn extends Component {
  render() {
    const {containerStyle, view_iconStyle, iconStyle, textStyle, title, image, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[Styles.container, containerStyle]}
        onPress={onPress}>
        {image && (
          <View style={[Styles.view_icon, view_iconStyle]}>
            <Image source={image} style={[Styles.icon, iconStyle]} />
          </View>
        )}
        <Text style={[Styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Item_Buttonn;
