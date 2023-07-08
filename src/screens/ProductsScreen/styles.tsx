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
    headerContainer: {
      flex: 1,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
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
      zIndex: 9999,
      width: bigWidthScreen(dimensions) ? '90%' : '93%',
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
