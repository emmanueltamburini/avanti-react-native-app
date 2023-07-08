import {Platform, StyleSheet} from 'react-native';
import {ThemeState} from '../../context/Theme/themeReducer';

export const stylesFunction = (theme: ThemeState) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 10,
    },
    textBackground: {
      flexDirection: 'row',
      backgroundColor: theme.background,
      borderRadius: 50,
      height: 40,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
    },
    textInput: {
      flex: 1,
      fontSize: 18,
      top: Platform.OS === 'ios' ? 0 : 4,
      color: theme.colors.text,
    },
  });
