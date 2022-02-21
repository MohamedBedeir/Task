import { StyleSheet, Dimensions } from 'react-native';
import {Color} from '../../Config';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  // screen ==========
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList_restaurantsItem: {
    width: width,
    alignItems: 'center',
  },
  // header ==========
  conteaner_header: {
    width: width,
    height: width * 0.61,
    backgroundColor: Color.ColorWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.02,
  },
  image_header: {
    width: width,
    height: width * 0.4,
  },
  button_container: {
    width: width,
    height: width * 0.065,
    marginTop: -width * 0.12,
    paddingHorizontal: width * 0.05 ,
    alignItems: 'flex-end',
    marginBottom: width * 0.12,
  },
  button_header:{
    width: width * 0.3,
    height: width * 0.07,
    paddingHorizontal: width * 0.04,
    borderRadius: height * 0.025,
    backgroundColor: Color.ColorYellow,
    flexDirection: 'row',
  },
  button_header_view_icon: {
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.ColorYellow,
  },
  button_header_iconStyle: {
    width: width * 0.05,
    height: width * 0.05,
  },
  button_header_textStyle: {
    fontSize: width * 0.034,
    fontWeight: 'bold',
    color: Color.ColorTurquoise,
  },
  view_logo: {
    height: width * 0.2,
  },
  branch_text: {
    width: width * 0.8,
    height: height * 0.04,
    marginVertical: height * 0.01,
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: Color.ColorTurquoise,
    textAlign: 'center',
  },
  // model ==========
  model_container: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
  },
  model_view: {
    width: width,
    height: height * 0.532,
    alignItems: 'center',
    backgroundColor: Color.ColorWhite,
    borderTopLeftRadius: width * 0.06,
    borderTopRightRadius: width * 0.06,
  },
  model_view_close:{
    width: width * 0.8,
    alignItems: 'flex-end',
    marginVertical: height * 0.02,
  },
  model_icon_close: {
    width: width * 0.05,
    height: width * 0.05,
  },
  
});
