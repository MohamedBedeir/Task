import { StyleSheet, Dimensions } from 'react-native';
import {Color} from '../../Config';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  // screen ==========
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.ColorLight,
    paddingTop: height * 0.01,
  },
  container_search: {
    width: width * 0.9,
    backgroundColor:' red',

  },
  view_search: {
    width: width * 0.7,
    height: height * 0.08,
    backgroundColor: Color.LightGray,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.03,
    borderRadius: height * 0.05,
    borderWidth: 0,
  },
  input: {
    width: width * 0.54,
    height: height * 0.08,
    fontSize: width * 0.036,
    fontWeight: '400',
    color: Color.DarkGray,
  },
  // home ================
  container_home: {
    flex: 1,
    width: width,
    alignItems: 'center',
  },
  flatList_tags: {
    height: width * 0.24,
    borderTopColor: Color.Gray,
    borderWidth: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: Color.ColorBlack,
    marginBottom: height * 0.02,
  },
  
  flatList_restaurants: {
    width: width,
    alignItems: 'center',
    marginBottom: 100,
  },
  view_AddRestaurant: {
    position: 'absolute',
    width: width,
    alignItems: 'center',
    marginTop: height * 0.64,
  },
  button_header:{
    width: width * 0.5,
    height: width * 0.11,
    paddingHorizontal: width * 0.04,
    borderRadius: height * 0.055,
    backgroundColor: Color.ColorYellow,
    flexDirection: 'row',
  },
  button_header_view_icon: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: width * 0.045,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.ColorTurquoise,
  },
  button_header_iconStyle: {
    width: width * 0.05,
    height: width * 0.05,
  },
  button_header_textStyle: {
    fontSize: width * 0.03,
    fontWeight: 'bold',
    color: Color.ColorTurquoise,
  },
  // out search ==========
  search_container: {},
  search_view: {},
  search_flatList: {
    width: width,
    alignItems: 'center',
  },
  search_text: {
    width: width * 0.8,
    marginVertical: height * 0.01,
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: Color.LightGray,
  },
//====== model syle =========
modelAdd_container: {
  width: width,
  height: height,
  justifyContent: 'flex-end',
},
modelAdd_view: {
  width: width,
  height: height * 0.5,
  alignItems: 'center',
  backgroundColor: Color.ColorWhite,
  borderTopLeftRadius: width * 0.06,
  borderTopRightRadius: width * 0.06,
},
modelAdd_view_close:{
  width: width * 0.8,
  alignItems: 'flex-end',
  marginVertical: height * 0.02,
},
modelAdd_icon_close: {
  width: width * 0.05,
  height: width * 0.05,
},
modelAdd_text: {
  width: width * 0.8,
  marginTop: -height * 0.02,
  marginBottom: height * 0.03,
  fontSize: width * 0.04,
  fontWeight: 'bold',
  color: Color.LightGray,
},
modelAdd_view_button: {
  justifyContent: 'center',
},
});
