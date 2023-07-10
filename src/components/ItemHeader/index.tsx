import React, {useContext} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Product} from '../../interfaces/singleProductInterfaces';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {stylesFunction} from './styles';
import {TouchableIcon} from '../TouchableIcon';
import {ThemeText} from '../ThemeComponents/ThemeText';
import {FadeInImage} from '../FadeInImage';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {RootStackParams as RootStackParamsTab1} from '../../navigator/Tab1';
import {RootStackParams as RootStackParamsTab2} from '../../navigator/Tab2';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  product?: Product;
  navigation: StackNavigationProp<
    RootStackParamsTab1 | RootStackParamsTab2,
    'ProductScreen',
    undefined
  >;
}

export const ItemHeader = ({product, navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const dimensions = useWindowDimensions();
  const {theme} = useContext(ThemeContext);
  const styles = stylesFunction(theme, top, dimensions);

  return (
    <View style={styles.headerContainer}>
      <TouchableIcon
        activeOpacity={0.8}
        style={styles.backButton}
        onPress={() => navigation.pop()}
        name="arrow-back-outline"
        color={theme.background}
        size={35}
      />
      <ThemeText ignoreTheme style={styles.itemName}>
        {product?.title}
      </ThemeText>
      <View style={styles.spacer} />
      <FadeInImage uri={product?.featuredImage.url!} style={styles.itemImage} />
    </View>
  );
};
