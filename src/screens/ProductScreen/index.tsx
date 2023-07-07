import React from 'react';
import {View} from 'react-native';
import {stylesFunction} from './styles';
import {ThemeText} from '../../components/ThemeComponents/ThemeText';

export const ProductScreen = () => {
  const styles = stylesFunction();

  return (
    <View style={styles.container}>
      <ThemeText>CategoriesScreen</ThemeText>
    </View>
  );
};
