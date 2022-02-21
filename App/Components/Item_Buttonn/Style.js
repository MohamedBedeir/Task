import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../Config';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.1,
    borderRadius: height * 0.045,
    backgroundColor: Color.ColorYellow,
    flexDirection: 'row',
  },
  view_icon: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.ColorTurquoise,
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  text: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: Color.ColorTurquoise,
  },
});
