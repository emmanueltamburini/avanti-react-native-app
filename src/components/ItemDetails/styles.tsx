import {ScaledSize, StyleSheet} from 'react-native';

export const stylesFunction = (dimensions: ScaledSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width:
        dimensions.width >= 650 ? dimensions.width * 0.5 : dimensions.width,
    },
    absoluteFillObject:
      dimensions.width >= 650 ? {} : {...StyleSheet.absoluteFillObject},
    containerInfo: {
      marginHorizontal: 20,
    },
    topSeparator: {
      marginTop: dimensions.width >= 650 ? 0 : 460,
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
