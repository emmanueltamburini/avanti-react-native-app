import {ScaledSize, StyleSheet} from 'react-native';
import {bigWidthScreen} from '../../helpers/utils';

export const stylesFunction = (dimensions: ScaledSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    flatListContainer: {
      alignItems: 'center',
    },
    activityIndicator: {
      height: 100,
    },
    backButton: {
      position: 'absolute',
      top: 30,
      left: -5,
    },
    titleContainer: {
      flex: bigWidthScreen(dimensions) ? 15 : 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    resultContainer: {
      flex: bigWidthScreen(dimensions) ? 8 : 12,
      flexDirection: 'row',
    },
    searchInput: {
      marginTop: 10,
      marginBottom: 20,
      minWidth: dimensions.width * 0.85,
    },
    headerTitle: {
      alignItems: 'center',
      paddingHorizontal: 30,
      fontSize: 15,
    },
    contentContainer: {
      alignItems: 'center',
      paddingBottom: 100,
    },
  });
