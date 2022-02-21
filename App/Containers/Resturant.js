import React, {useState} from 'react';
import {ScrollView, View, FlatList, Text, Modal, TouchableOpacity, Image} from 'react-native';
import Styles from './Styles/RestaurantStyle';
import Item_Buttonn from '../Components/Item_Buttonn';
import Item_Input from '../Components/Item_Input';
import Item_Restaurant from '../Components/Item_Resturant';
import Item_RestaurantTag from '../Components/Item_RestaurantTag';
import {Color} from '../Config';
import DummyData from '../Config/DummyData';
import Images from '../Config/Images';
const Resturant = data => {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalTagsVisible, setModalTagsVisible] = useState(false);

  const _keyResturant = (item, index) => `Resturant-${index}`;
  const _keyTag = (item, index) => `Tag-${index}`;
  const _keyResturantRelatedToTags = (item, index) => `ResturantRelatedToTags-${index}`;
  const _keySearch = (item, index) => `Search-${index}`;

  const _AddNewResturant = () => {
    const array = tags.split(', ');
    let Tags= [];
    for ( let x = 0; x < array.length; x++) {
      Tags.push({
        name: array[x],
        image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/sandwich.png?alt=media&token=24612ee9-cb30-4b4e-a9ea-8d4a5b7e0bf5',
      })
    }
    const data = {
      name: name,
      tags: Tags,
      //========= other_data -> static =============
      logo: 'https://ty-dashboard.s3.amazonaws.com/unnamed%20%281%29-1640219353386.jpg',
      cover: Images.cover,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      branches: [
        {
          name: 'Nasr City',
        },
      ],
      items: [
        {
          name: 'small sie pizza',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '120 LE.',
          in_cart: true,
        },
      ], 
    }
    console.log('DummyData.DATA-----1-----', DummyData.DATA.length);
    DummyData.DATA.push(data);
    console.log('DummyData.DATA-----2-----', DummyData.DATA.length);
    setModalAddVisible(false);
  }
  const _ModelAddResturant = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddVisible}>
        <ScrollView>
        <View style={Styles.modelAdd_container}>
          <View style={Styles.modelAdd_view}>
            <View style={Styles.modelAdd_view_close}>
              <TouchableOpacity onPress={() => setModalAddVisible(false)}>
                <Image source={Images.close} style={Styles.modelAdd_icon_close} />
              </TouchableOpacity>
            </View>
            <Item_Input placeHolder={'name'} onChangeText={text => setName(text)}/>
            <Item_Input placeHolder={'tags'} onChangeText={text => setTags(text)}/>
            <Text style={Styles.modelAdd_text}>EX. tag1, tag2, etc...</Text>
            <Item_Buttonn
              title={'Add'}
              containerStyle={Styles.modelAdd_view_button}
              onPress={_AddNewResturant}
            />
          </View>
        </View>
        </ScrollView>
      </Modal>
    )
  };
  const _ModelResturantRelatedToTags = () => {
    let resturants = [];
    const Data = DummyData.DATA;
    for (let x = 0; x < Data.length; x++) {
      for (let y = 0; y < Data[x].tags.length; y++) {
        if (Data[x].tags[y].name == tag) {
          resturants.push(Data[x]);
        } else {
        }
      }
    }
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTagsVisible}>
        <ScrollView>
        <View style={Styles.modelAdd_container}>
          <View style={Styles.modelAdd_view}>
            <View style={Styles.modelAdd_view_close}>
              <TouchableOpacity onPress={() => setModalTagsVisible(false)}>
                <Image source={Images.close} style={Styles.modelAdd_icon_close} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={resturants}
              keyExtractor={_keyResturantRelatedToTags}
              renderItem={_renderItemResturants}
              //contentContainerStyle={Styles.search_flatList}
            />
          </View>
        </View>
        </ScrollView>
      </Modal>
    )
  };
  const _returnItemSearch = ({item}) => {
    return (
      <TouchableOpacity onPress={() => data.openRestaurantDetails(item)}>
        <Text style={Styles.search_text}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  const _Output_Search = () => {
    const array = [];
    for (let x = 0; x < DummyData.DATA.length; x++) {
      let position = DummyData.DATA[x].name.search(search);
      if (position >= 0 && search != '') {
        array.push(DummyData.DATA[x]);
      }
    }
    return (
      <View style={Styles.search_container}>
      <View style={Styles.search_view}>
        <FlatList
          data={array}
          keyExtractor={_keySearch}
          renderItem={_returnItemSearch}
          contentContainerStyle={Styles.search_flatList}
        />
      </View>
    </View>
    )
  };
  const _renderItemTags = ({item}) => {
    return (
      <Item_RestaurantTag item={item} onPress={() => {setModalTagsVisible(true), setTag(item.name)}}/>
    );
  };
  const _renderItemResturants = ({item}) => {
    return (
      <Item_Restaurant restaurant={item} onPress={() => data.openRestaurantDetails(item)} />
    );
  };
  const _Data_Home = () => {
    return (
      <View style={Styles.container_home}>
        <View style={Styles.container_search}>
          <FlatList
            data={DummyData.TAGS}
            keyExtractor={_keyTag}
            renderItem={_renderItemTags}
            contentContainerStyle={Styles.flatList_tags}
            horizontal
          />
        </View>
      <View style={Styles.container_search}>
        <Text style={Styles.title}>Restaurants</Text>
      </View>
      <FlatList
        data={DummyData.DATA}
        keyExtractor={_keyResturant}
        renderItem={_renderItemResturants}
        contentContainerStyle={Styles.flatList_restaurants}
      />
      <View style={Styles.view_AddRestaurant}>
          <Item_Buttonn
          onPress={() => setModalAddVisible(true)}
            title={'ADD NEW RESTURANT'}
            image={Images.bag_Light}
            containerStyle={Styles.button_header}
            view_iconStyle={Styles.button_header_view_icon}
            iconStyle={Styles.button_header_iconStyle}
            textStyle={Styles.button_header_textStyle}
            />
      </View>
      </View>
    )
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.container_search}>
        <Item_Input
          placeHolder={'What would you like to buy?'}
          image={Images.search}
          containerStyle={Styles.view_search}
          inputStyle={Styles.input}
          placeholderTextColor={Color.DarkGray}
          onChangeText={text => setSearch(text)}/>
      </View>
      {search == '' ? _Data_Home() : _Output_Search()}
      {_ModelAddResturant()}
      {_ModelResturantRelatedToTags()}
    </View>
  );
};

export default Resturant;