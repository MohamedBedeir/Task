import React, {useState} from 'react';
import {View, FlatList, Image, Modal, TouchableOpacity, Text} from 'react-native';
import Styles from './Styles/RestaurantDetailsStyle';
import Item_Buttonn from '../Components/Item_Buttonn';
import Item_RestaurantItem from '../Components/Item_RestaurantItem';
import {Color} from '../Config';
import Images from '../Config/Images';
import Item_Resturant from '../Components/Item_Resturant';

const RestaurantDetails = item => {
  const data = item.item;
  const [branches, setBranches] = useState(false);

  const _keyExtractor = (item, index) => `orders-${index}`;
  const _keyExtractorBranch = (item, index) => `orders-${index}`;

  const _renderItem = ({item}) => {
    return (
      <Item_RestaurantItem restaurant_item={item} onPress={() => null} />
    );
  };
  const _Header = () => {
    return (
      <View style={Styles.conteaner_header}>
        <Image
            source={Images.cover}
            style={Styles.image_header}
          />
        <View style={Styles.button_container}>
          <Item_Buttonn
            onPress={() => setBranches(true)}
            title={'Branches'}
            image={Images.location}
            containerStyle={Styles.button_header}
            view_iconStyle={Styles.button_header_view_icon}
            iconStyle={Styles.button_header_iconStyle}
            textStyle={Styles.button_header_textStyle}
          />
        </View>
        <Item_Resturant restaurant={data} containerStyle={Styles.view_logo}/>
        
      </View>
    );
  }
  const _return_ItemBranch = ({item}) => {
    return (
      <TouchableOpacity onPress={() => null}>
        <Text style={Styles.branch_text}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  const _ModelBranches = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={branches}>
        <View style={Styles.model_container}>
        <View style={Styles.model_view}>
          <View style={Styles.model_view_close}>
              <TouchableOpacity onPress={() => setBranches(false)}>
                <Image source={Images.close} style={Styles.model_icon_close} />
              </TouchableOpacity>
            </View>
          <FlatList
            data={data.branches}
            keyExtractor={_keyExtractorBranch}
            renderItem={_return_ItemBranch}
            //contentContainerStyle={Styles.search_flatList}
          />
          </View>
        </View>
      </Modal>
    )
  };
  return (
    <View style={Styles.container}>
      {_Header()}
      <FlatList
        data={data.items}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        contentContainerStyle={Styles.flatList_restaurantsItem}
      />
      {_ModelBranches()}
    </View>
  );
};

export default RestaurantDetails;