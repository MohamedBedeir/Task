import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../Config';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.03,
    borderRadius: height * 0.05,
    borderColor: Color.ColorYellow,
    borderWidth: 1,
    flexDirection: 'row',
  },
  image:{
    width: width * 0.05,
    height: width * 0.05,
    marginHorizontal: width * 0.01,
  },
  input: {
    width: width * 0.74,
    height: height * 0.07,
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: Color.Gray,
  },
});
