import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const inputWidth = width * (5 / 12);

export const signInputStyles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.7,
    borderRadius: 10,
    marginVertical: 2,
  },
  iconSign: {
    borderRightWidth: 1,
    borderRightColor: 'black',
    paddingRight: 5,
  },
  txtInput: {
    width: inputWidth,
    height: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
