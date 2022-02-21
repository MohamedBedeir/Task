import React, {Component} from 'react';
import {View, TextInput, Image} from 'react-native';
import {Color} from '../../Config';
import Styles from './Style';

class Item_Input extends Component {
  render() {
    const {image, containerStyle, placeHolder, onChangeText, inputStyle, placeholderTextColor} = this.props;
    return (
      <View style={[Styles.container, containerStyle]}>
        {image && (
          <Image source={image} style={Styles.image} />
        )}
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={placeholderTextColor ? placeholderTextColor : Color.Gray}
          onChangeText={onChangeText}
          style={[Styles.input, inputStyle]}
        />
      </View>
    );
  }
}

export default Item_Input;
