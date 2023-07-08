import {ScaledSize, StyleSheet} from 'react-native';
import {bigWidthScreen} from '../../helpers/utils';

export const stylesFunction = (dimensions: ScaledSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    headerContainer: {
      flex: bigWidthScreen(dimensions) ? 2 : 1,
      flexDirection: 'row',
      minHeight: bigWidthScreen(dimensions) ? 0 : 20,
      marginBottom: 10,
    },
    backContainer: {
      flex: 1,
      paddingLeft: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchContainer: {
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
