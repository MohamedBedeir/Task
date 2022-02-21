import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../Config';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: width * 0.3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: height * 0.03,
    backgroundColor: Color.ColorWhite,
    borderRadius: width * 0.02,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    marginHorizontal: width * 0.04,
  },
  view_data: {
    width: width * 0.62,
    height: width * 0.2,
  },
  text_title: {
    fontSize: width * 0.048,
    fontWeight: 'bold',
    color: Color.ColorBlack,
  },
  text_tags: {
    fontSize: width * 0.036,
    fontWeight: '400',
    color: Color.DarkGray,
    marginVertical: height * 0.01,
  },
});
