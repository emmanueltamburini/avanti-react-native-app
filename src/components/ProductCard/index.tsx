import React, {useContext} from 'react';
import {TouchableOpacity, View, useWindowDimensions} from 'react-native';
import {ThemeText} from '../ThemeComponents/ThemeText';
import {FadeInImage} from '../FadeInImage';
import {ThemeContext} from '../../context/Theme/ThemeContext';
import {stylesFunction} from './styles';
import {Edge} from '../../interfaces/productInterfaces';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams as RootStackParamsTab1} from '../../navigator/Tab1';
import {RootStackParams as RootStackParamsTab2} from '../../navigator/Tab2';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: Edge;
}

type navigationProp = StackNavigationProp<
  RootStackParamsTab1 | RootStackParamsTab2
>;

export const ProductCard = ({item}: Props) => {
  const windowDimension = useWindowDimensions();
  const {navigate} = useNavigation<navigationProp>();
  const {theme} = useContext(ThemeContext);

  const styles = stylesFunction(windowDimension, theme);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigate('ProductScreen', {id: item.node.id})}>
      <View style={styles.cardContainer}>
        <View style={styles.leftContainer}>
          <FadeInImage
            uri={item.node.featuredImage.url}
            style={styles.images}
          />
        </View>
        <View style={styles.rightContainer}>
          <ThemeText style={styles.name} ignoreTheme>
            {item.node.title}
          </ThemeText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
