import {ScaledSize, StyleSheet} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';

export const stylesFunction = (
  windowDimension: ScaledSize,
  theme: ThemeState,
) =>
  StyleSheet.create({
    cardContainer: {
      backgroundColor: theme.background,
      marginHorizontal: 10,
      height: windowDimension.height * 0.2,
      width: windowDimension.width * 0.8,
      marginBottom: 25,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 8,
      flexDirection: 'row',
      flex: 1,
    },
    images: {
      alignSelf: 'flex-end',
      height: '100%',
      width: '100%',
      paddingHorizontal: 10,
      paddingBottom: 10,
      backgroundColor: 'blue',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      top: 10,
      left: 10,
    },
    leftContainer: {
      backgroundColor: theme.primary,
      flex: 1,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    rightContainer: {
      flex: 1,
      overflow: 'hidden',
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
  });
