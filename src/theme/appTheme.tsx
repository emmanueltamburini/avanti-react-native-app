import {StyleSheet} from 'react-native';

export const globalStyles = () =>
  StyleSheet.create({
    title: {
      fontSize: 35,
      fontWeight: 'bold',
    },
    globalMargin: {
      marginHorizontal: 20,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 7.49,
      elevation: 6,
    },
    avantiLogo: {
      top: -100,
      right: -120,
      opacity: 0.2,
      position: 'absolute',
      width: 300,
      height: 300,
    },
  });
