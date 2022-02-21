import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../Config';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    width: width * 0.15 * (339 / 165),
    height: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.01,
  },
  image: {
    width: width * 0.15 * (339 / 165),
    height: width * 0.15,
  },
  text: {
    fontSize: width * 0.034,
    fontWeight: '400',
    color: Color.ColorBlack,
    marginVertical: height * 0.004,
  },
});
