import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../Config';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: width * 0.36,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: width * 0.03,
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
    backgroundColor: Color.ColorWhite,
    borderRadius: width * 0.02,
  },
  view_data: {
    width: width * 0.58,
    height: width * 0.28,
  },
  text_title: {
    fontSize: width * 0.044,
    fontWeight: 'bold',
    color: Color.ColorBlack,
  },
  text_description: {
    fontSize: width * 0.038,
    fontWeight: '400',
    color: Color.DarkGray,
    marginVertical: height * 0.01,
  },
  text_price: {
    fontSize: width * 0.044,
    fontWeight: 'bold',
    color: Color.ColorTurquoise,
    marginVertical: height * 0.01,
  },
  view_image: {
    width: width * 0.25,
    height: width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.02,
  },
  view_icon: {
    marginTop: -width * 0.06,
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.ColorYellow,
  },
  icon: {
    width: width * 0.05,
    height: width * 0.05,
  },
});
