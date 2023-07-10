import {ScaledSize, StyleSheet} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';
import {bigWidthScreen} from '../../helpers/utils';

export const stylesFunction = (
  windowDimension: ScaledSize,
  theme: ThemeState,
) =>
  StyleSheet.create({
    cardContainer: {
      backgroundColor: theme.background,
      marginHorizontal: 10,
      height: bigWidthScreen(windowDimension)
        ? windowDimension.height * 0.5
        : windowDimension.height * 0.2,
      width: bigWidthScreen(windowDimension)
        ? windowDimension.width * 0.65
        : windowDimension.width * 0.8,
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
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'flex-end',
      paddingEnd: 15,
      paddingTop: 15,
    },
    leftContainer: {
      flex: 1,
      overflow: 'hidden',
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    rightContainer: {
      flex: 1,
      backgroundColor: theme.text,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
  });
