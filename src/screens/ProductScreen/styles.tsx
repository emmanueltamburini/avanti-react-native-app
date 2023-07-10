import {ScaledSize, StyleSheet} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';

export const stylesFunction = (
  theme: ThemeState,
  top: number,
  dimensions: ScaledSize,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: dimensions.width >= 650 ? 'row' : 'column',
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
