import {ScaledSize, StyleSheet} from 'react-native';
import {bigWidthScreen} from '../../helpers/utils';

export const stylesFunction = (dimensions: ScaledSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: bigWidthScreen(dimensions)
        ? dimensions.width * 0.5
        : dimensions.width,
    },
    absoluteFillObject: bigWidthScreen(dimensions)
      ? {}
      : {...StyleSheet.absoluteFillObject},
    containerInfo: {
      marginHorizontal: 20,
    },
    topSeparator: {
      marginTop: bigWidthScreen(dimensions) ? 0 : 420,
    },
    title: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
    },
    smallText: {
      fontSize: 14,
      alignSelf: 'center',
      marginRight: 10,
    },
    regularText: {
      fontSize: 19,
    },
    listContainer: {
      flexDirection: 'row',
    },
    rightSeparator: {
      marginRight: 10,
    },
    basicVariant: {
      width: 80,
      height: 80,
      marginRight: 10,
    },
    spacer: {
      height: 100,
    },
  });
