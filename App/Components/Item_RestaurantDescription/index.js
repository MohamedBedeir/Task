import React, {Component} from 'react';
import {View, Text, I18nManager, Image, TouchableOpacity} from 'react-native';
import {Helpers} from '../../Config';
import Images from '../../Config/Images';
import I18n from '../../I18n';
import RestWorker from '../../Services/RestWorker';
import StyleLTR from './StyleLTR';
import StyleRTL from './StyleRTL';

const Styles = I18nManager.isRTL ? StyleRTL : StyleLTR;

class Item_Card extends Component {
  _EditToCard = async id => {
    const {item} = this.props;
    const data = {
      id: item.id,
      quantity: id == 1 ? item.quantity + 1 : item.quantity - 1,
    };
    const product = await RestWorker.EditProductFromCart(data);
    if (product.status == 200) {
      Helpers.Notifiy(product.data.message, 'green');
    } else {
      Helpers.Notifiy(product.data.message, 'red');
    }
  };
  render() {
    const {item, onPressDelete, onPressEdit_Add, onPressEdit_Remove} =
      this.props;
    const disabled = item.quantity > 1 ? false : true;
    const minuse = item.quantity > 1 ? Images.minus : Images.minus_light;
    return (
      <View style={Styles.container}>
        <View style={Styles.view1}>
          <View style={Styles.view_image}>
            <Image source={{uri: item.image}} style={Styles.image} />
          </View>
          <View style={Styles.view_title}>
            <Text style={Styles.text_title}>
              {I18n.t('Name')} {item.title}
            </Text>
            <Text style={Styles.text_price}>
              {item.total_price} {I18n.t('EGP')}
            </Text>
          </View>
        </View>
        <View style={Styles.view2}>
          <View style={Styles.view_remove}>
            <TouchableOpacity
              style={Styles.touch_remove}
              onPress={onPressDelete}>
              <Image source={Images.remove} style={Styles.icon_remove} />
              <Text style={Styles.text_remove}>{I18n.t('Remove')}</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.view_edit}>
            <TouchableOpacity onPress={onPressEdit_Remove} disabled={disabled}>
              <Image source={minuse} style={Styles.icon_edit} />
            </TouchableOpacity>
            <Text style={Styles.text_count}>{item.quantity}</Text>
            <TouchableOpacity onPress={onPressEdit_Add}>
              <Image source={Images.plus} style={Styles.icon_edit} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Item_Card;
