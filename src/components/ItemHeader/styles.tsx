import {ScaledSize, StyleSheet} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';
import {bigWidthScreen} from '../../helpers/utils';

export const stylesFunction = (
  theme: ThemeState,
  top: number,
  dimensions: ScaledSize,
) =>
  StyleSheet.create({
    headerContainer: {
      height: bigWidthScreen(dimensions) ? 320 : 470,
      width: bigWidthScreen(dimensions)
        ? dimensions.width * 0.5
        : dimensions.width,
      backgroundColor: theme.text,
      zIndex: 999,
      alignItems: 'center',
      borderBottomRightRadius: 1000,
      borderBottomLeftRadius: 1000,
    },
    backButton: {
      position: 'absolute',
      left: 10,
      top: top + 15,
    },
    itemName: {
      color: theme.background,
      fontSize: 40,
      alignSelf: 'flex-start',
      left: bigWidthScreen(dimensions) ? 160 : 140,
      top: top + 10,
    },
    spacer: {
      height: bigWidthScreen(dimensions) ? 200 : 300,
      width: bigWidthScreen(dimensions) ? 220 : 300,
    },
    itemImage: {
      height: bigWidthScreen(dimensions) ? 150 : 250,
      width: bigWidthScreen(dimensions) ? 150 : 250,
      position: 'absolute',
      bottom: -15,
      borderWidth: 1,
      borderColor: theme.background,
    },
  });
